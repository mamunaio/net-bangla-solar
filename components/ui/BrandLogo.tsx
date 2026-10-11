"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  showText?: boolean;
  priority?: boolean;
}

export function BrandLogo({
  className,
  priority = true,
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center select-none relative shrink-0",
        className
      )}
    >
      <Image
        src="/images/net-bangla-solar-logo.png"
        alt="Net Bangla Solar Energy Solutions"
        width={1540}
        height={1212}
        priority={priority}
        className="h-full w-auto max-h-full object-contain"
      />
    </div>
  );
}
