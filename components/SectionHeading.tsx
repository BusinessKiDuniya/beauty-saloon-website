import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  description?: string;
  subtitle?: string;
  align?: "left" | "center" | "split";
  theme?: "light" | "dark";
  action?: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  badge,
  title,
  description,
  subtitle,
  align = "center",
  theme = "light",
  action,
  className = ""
}: SectionHeadingProps) {
  const displayEyebrow = eyebrow || badge;
  const displayDescription = description || subtitle;
  const isDark = theme === "dark";

  if (align === "split") {
    return (
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 ${className}`}>
        <div className="max-w-2xl">
          {displayEyebrow && (
            <span
              className={`inline-block text-xs uppercase tracking-[0.25em] font-semibold mb-3 ${
                isDark ? "text-[#A8B39F]" : "text-[#5C5E58]"
              }`}
            >
              {displayEyebrow}
            </span>
          )}
          <h2
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight ${
              isDark ? "text-[#FFFDF8]" : "text-[#292A27]"
            }`}
          >
            {title}
          </h2>
        </div>
        {(displayDescription || action) && (
          <div className="max-w-md space-y-4">
            {displayDescription && (
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-[#DDE3D9]" : "text-[#5C5E58]"
                }`}
              >
                {displayDescription}
              </p>
            )}
            {action && <div>{action}</div>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`mb-12 lg:mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"
      } ${className}`}
    >
      {displayEyebrow && (
        <span
          className={`inline-block text-xs uppercase tracking-[0.25em] font-semibold mb-3 ${
            isDark ? "text-[#A8B39F]" : "text-[#5C5E58]"
          }`}
        >
          {displayEyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-4 ${
          isDark ? "text-[#FFFDF8]" : "text-[#292A27]"
        }`}
      >
        {title}
      </h2>
      {displayDescription && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isDark ? "text-[#DDE3D9]" : "text-[#5C5E58]"
          }`}
        >
          {displayDescription}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
