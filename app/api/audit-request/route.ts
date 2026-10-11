import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
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

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.AUDIT_RECEIVER_EMAIL || "solar@netbanglaltd.com";

    // Format HTML email content
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
              <td style="padding: 10px 0;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0;"><a href="tel:${phone}" style="color: #d97706; font-weight: bold; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Client Email:</td>
              <td style="padding: 10px 0;">${email ? `<a href="mailto:${email}" style="color: #2563eb;">${email}</a>` : "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Company / Org:</td>
              <td style="padding: 10px 0;">${company || "Individual / Not specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Facility Type:</td>
              <td style="padding: 10px 0; text-transform: capitalize; font-weight: 600; color: #0284c7;">${facilityType || "General"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Location / District:</td>
              <td style="padding: 10px 0;">${location || "Not specified"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold;">Estimated Monthly Bill:</td>
              <td style="padding: 10px 0;">${monthlyBill || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Rooftop Notes:</td>
              <td style="padding: 10px 0; line-height: 1.5;">${message || "No special requirements listed."}</td>
            </tr>
          </table>
        </div>

        <div style="background: #f8fafc; padding: 12px; border-radius: 6px; font-size: 12px; color: #64748b; text-align: center;">
          Received via <strong>www.netbanglaenergy.com</strong> &bull; Destination: <strong>${recipientEmail}</strong>
        </div>
      </div>
    `;

    // If SMTP credentials are configured in environment variables, dispatch email
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
        replyTo: email || undefined,
        subject: `⚡ New Feasibility Audit Request: ${name} (${facilityType || "Solar Project"})`,
        html: htmlContent,
      });

      console.log(`[Audit Email Sent] Successfully dispatched to ${recipientEmail}`);
    } else {
      // In dev or if SMTP not yet configured, log the lead safely
      console.log(`[Audit Request Logged - Target: ${recipientEmail}]`, {
        name,
        phone,
        email,
        company,
        facilityType,
        location,
        monthlyBill,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: `Audit request received successfully and routed to ${recipientEmail}`,
    });
  } catch (error) {
    console.error("Error processing audit request:", error);
    return NextResponse.json(
      { error: "Failed to process audit request. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
