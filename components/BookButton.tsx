"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { useClient } from "@/context/ClientContext";
import { businessInfo as defaultBusinessInfo } from "@/data/siteData";

interface BookButtonProps {
  className?: string;
  variant?: "primary" | "light" | "outline" | "sm" | "link" | "white" | "navbar";
  children?: React.ReactNode;
  showIcon?: boolean;
  onClick?: () => void;
  title?: string;
}

export default function BookButton({
  className = "",
  variant = "primary",
  children,
  showIcon = true,
  onClick,
  title = "Online appointment booking opening soon"
}: BookButtonProps) {
  const { client } = useClient();
  const info = client?.businessInfo || defaultBusinessInfo;
  const isBookingDisabled = info.isBookingDisabled ?? true;

  // Base styling for each visual variant
  const variantStyles = {
    primary:
      "px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#2B4035] text-[#FFFDF8] font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md whitespace-nowrap",
    navbar:
      "h-10 px-5 rounded-full bg-[#2B4035] text-[#FFFDF8] font-semibold text-xs whitespace-nowrap inline-flex items-center justify-center gap-2 shadow-sm shrink-0",
    light:
      "px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#EDE7DD] text-[#292A27] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 border border-[#DACFC2]/60 whitespace-nowrap",
    white:
      "px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FFFDF8] text-[#1E2D25] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg whitespace-nowrap",
    outline:
      "px-5 py-2.5 rounded-full border border-[#2B4035] text-[#2B4035] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 whitespace-nowrap",
    sm: "px-3.5 py-1.5 rounded-full bg-[#2B4035] text-[#FFFDF8] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap shrink-0",
    link: "text-xs font-semibold text-[#292A27] inline-flex items-center gap-1.5 whitespace-nowrap"
  };

  const chosenStyle = variantStyles[variant] || variantStyles.primary;

  if (isBookingDisabled) {
    // Non-clickable element: visible and beautifully styled, with clear disabled/not-allowed indicator
    return (
      <span
        role="button"
        aria-disabled="true"
        title={title}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className={`${chosenStyle} pointer-events-auto select-none booking-disabled-cursor opacity-95 ${className}`}
      >
        {showIcon && (
          <Calendar
            className={`${
              variant === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
            } ${variant === "white" ? "text-[#B5A18D]" : "text-[#B5A18D]"}`}
          />
        )}
        <span>{children || "Book an Appointment"}</span>
      </span>
    );
  }

  // Active clickable link (for when enabled)
  return (
    <a
      href={info.bookingUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${chosenStyle} hover:opacity-90 active:scale-98 transition-all ${className}`}
    >
      {showIcon && (
        <Calendar
          className={`${variant === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
            } text-[#B5A18D]`}
        />
      )}
      <span >{children || "Book an Appointment"}</span>
    </a>
  );
}
