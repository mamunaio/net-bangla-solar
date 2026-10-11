import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory sliding-window Rate Limiter (Max 5 requests per 10 minutes per IP)
interface RateLimitRecord {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Periodic eviction to prevent unbounded memory growth
  if (rateLimitMap.size > 1000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (val.resetTime < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || record.resetTime < now) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

// Security sanitizers: prevent HTML Injection and XSS in email clients
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return escapeHtml(value.trim().slice(0, maxLength));
}

// Header sanitizer: strip CRLF newlines to block Email Subject Header Injection
function sanitizeHeader(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n\t]/g, " ").trim().slice(0, maxLength);
}

export async function POST(req: Request) {
  try {
    // 1. IP Rate Limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : (realIp || "127.0.0.1");

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many audit requests from this network. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    // 2. Parse Body with payload size safety
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    // 3. Honeypot check (Spambot trap: reject automated bots silently)
    if (body.website || body.honeypot || body._gotcha) {
      return NextResponse.json({
        success: true,
        message: "Audit request received successfully.",
      });
    }

    const {
      name,
      phone,
      email,
      company,
      facilityType,
      location,
      monthlyBill,
      message,
    } = body;

    // 4. Strict input sanitization & character length bounds
    const cleanName = sanitizeText(name, 100);
    const cleanPhone = sanitizeText(phone, 35);
    const rawEmail = typeof email === "string" ? email.trim().slice(0, 100) : "";
    const cleanEmail = rawEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail) ? escapeHtml(rawEmail) : "";
    const cleanCompany = sanitizeText(company, 100);
    const cleanFacilityType = sanitizeText(facilityType, 60);
    const cleanLocation = sanitizeText(location, 100);
    const cleanMonthlyBill = sanitizeText(monthlyBill, 60);
    const cleanMessage = sanitizeText(message, 3000);

    // 5. Validation Rules
    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!cleanPhone || cleanPhone.length < 6 || !/\d/.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please provide a valid phone number with digits." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.AUDIT_RECEIVER_EMAIL || "solar@netbanglaltd.com";
    const safeTelHref = cleanPhone.replace(/[^\d+]/g, "").slice(0, 20);

    // 6. Safe HTML email template with all values sanitized
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
        <div style="background: #0f172a; padding: 20px; border-radius: 8px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; color: #fbbf24; font-size: 20px;">Net Bangla Solar</h2>
          <p style="margin: 5px 0 0; color: #cbd5e1; font-size: 14px;">New Feasibility Audit Request</p>
        </div>

        <div style="padding: 20px 0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; width: 35%;">Client Name:</td>
              <td style="padding: 10px 0;">${cleanName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0;"><a href="tel:${safeTelHref}" style="color: #d97706; font-weight: bold; text-decoration: none;">${cleanPhone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Client Email:</td>
              <td style="padding: 10px 0;">${cleanEmail ? `<a href="mailto:${cleanEmail}" style="color: #2563eb;">${cleanEmail}</a>` : "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Company / Org:</td>
              <td style="padding: 10px 0;">${cleanCompany || "Individual / Not specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Facility Type:</td>
              <td style="padding: 10px 0; text-transform: capitalize; font-weight: 600; color: #0284c7;">${cleanFacilityType || "General"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Location / District:</td>
              <td style="padding: 10px 0;">${cleanLocation || "Not specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Estimated Monthly Bill:</td>
              <td style="padding: 10px 0;">${cleanMonthlyBill || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Rooftop Notes:</td>
              <td style="padding: 10px 0; line-height: 1.5;">${cleanMessage || "No special requirements listed."}</td>
            </tr>
          </table>
        </div>

        <div style="background: #f8fafc; padding: 12px; border-radius: 6px; font-size: 12px; color: #64748b; text-align: center;">
          Received via <strong>www.netbanglaenergy.com</strong> &bull; Destination: <strong>${recipientEmail}</strong>
        </div>
      </div>
    `;

    // 7. Safe Subject line with CRLF stripped
    const safeSubjectName = sanitizeHeader(name, 50);
    const safeSubjectFacility = sanitizeHeader(facilityType || "Solar Project", 30);
    const safeSubject = `⚡ New Feasibility Audit Request: ${safeSubjectName} (${safeSubjectFacility})`;

    // 8. SMTP Dispatch
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Net Bangla Solar Website" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        replyTo: cleanEmail || undefined,
        subject: safeSubject,
        html: htmlContent,
      });

      console.log(`[Audit Email Sent] Successfully dispatched to ${recipientEmail}`);
    } else {
      console.log(`[Audit Request Logged - Target: ${recipientEmail}]`, {
        cleanName,
        cleanPhone,
        cleanEmail,
        cleanCompany,
        cleanFacilityType,
        cleanLocation,
        cleanMonthlyBill,
        cleanMessage,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: `Audit request received successfully and routed to ${recipientEmail}`,
    });
  } catch (error) {
    // Redact internal error traces from client response
    console.error("Error processing audit request:", error);
    return NextResponse.json(
      { error: "Failed to process audit request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
