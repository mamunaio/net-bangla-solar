import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  clean?: boolean; // Option to remove padding if needed for edge-to-edge layouts
}

/**
 * Global responsive container system.
 * Max width: 1440px
 * Padding:
 * - Mobile (<768px): 20px (px-5)
 * - Tablet (768px - 1024px): 32px (md:px-8)
 * - Desktop (>1024px): 48px (lg:px-12)
 */
export function Container({
  as: Component = "div",
  children,
  className,
  clean = false,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full max-w-[1440px] mx-auto",
        !clean && "px-5 md:px-8 lg:px-12",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
