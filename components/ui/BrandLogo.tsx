"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  showText?: boolean;
  priority?: boolean;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
}

export function BrandLogo({
  className,
  priority = true,
  loading = "eager",
  decoding = "async",
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center select-none relative shrink-0",
        className
      )}
    >
      <Image
        src="/images/net-bangla-solar-logo.webp"
        alt="Net Bangla Solar"
        width={1540}
        height={1212}
        priority={priority}
        loading={priority ? "eager" : loading}
        decoding={decoding}
        className="h-full w-auto max-h-full object-contain"
      />
    </div>
  );
}
