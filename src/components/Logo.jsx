import React from "react";
import { cn } from "@/lib/utils";

const palettes = {
  light: {
    title: "text-slate-900",
    tagline: "text-slate-500",
    iconBg: "bg-blue-900/10",
    iconRing: "ring-blue-900/20",
    accent: "#0F4E8C",
    wave: "#1A6AB6",
    stripe: "#0E3F70",
  },
  dark: {
    title: "text-white",
    tagline: "text-blue-100/80",
    iconBg: "bg-white/10",
    iconRing: "ring-white/20",
    accent: "#E1F1FF",
    wave: "#8CC8FF",
    stripe: "#BBDFFF",
  },
};

const sizes = {
  sm: {
    icon: "h-10 w-10",
    title: "text-lg",
    tagline: "text-xs",
    gap: "gap-2",
  },
  md: {
    icon: "h-12 w-12",
    title: "text-xl",
    tagline: "text-sm",
    gap: "gap-3",
  },
  lg: {
    icon: "h-14 w-14",
    title: "text-2xl",
    tagline: "text-base",
    gap: "gap-4",
  },
};

export default function Logo({ className, variant = "light", showTagline = true, size = "md" }) {
  const palette = palettes[variant] ?? palettes.light;
  const dimensions = sizes[size] ?? sizes.md;

  return (
    <div className={cn("flex items-center", dimensions.gap, className)}>
      <span
        className={cn(
          "flex items-center justify-center rounded-2xl ring-1 ring-inset",
          dimensions.icon,
          palette.iconBg,
          palette.iconRing,
        )}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-3/4 w-3/4"
        >
          <rect x="3" y="3" width="42" height="42" rx="11" fill={palette.accent} opacity={variant === "dark" ? 0.25 : 1} />
          <path
            d="M10 14.5C10 12.567 11.567 11 13.5 11H22.5C24.433 11 26 12.567 26 14.5V33.5C26 35.433 24.433 37 22.5 37H13.5C11.567 37 10 35.433 10 33.5V14.5Z"
            fill={palette.stripe}
          />
          <path d="M13 16H19L11 34H10V26.5L13 16Z" fill={palette.accent} opacity="0.85" />
          <path d="M19 16H23L14 37H10L19 16Z" fill={palette.wave} opacity="0.75" />
          <path
            d="M28 19.5C29.657 18.13 31.46 17.5 33.5 17.5C35.54 17.5 37.343 18.13 39 19.5V21.5C37.343 22.87 35.54 23.5 33.5 23.5C31.46 23.5 29.657 22.87 28 21.5V19.5Z"
            fill={palette.wave}
          />
          <path
            d="M28 26.5C29.657 25.13 31.46 24.5 33.5 24.5C35.54 24.5 37.343 25.13 39 26.5V28.5C37.343 29.87 35.54 30.5 33.5 30.5C31.46 30.5 29.657 29.87 28 28.5V26.5Z"
            fill={palette.wave}
            opacity="0.9"
          />
          <path
            d="M28 33.5C29.657 32.13 31.46 31.5 33.5 31.5C35.54 31.5 37.343 32.13 39 33.5V35.5C37.343 36.87 35.54 37.5 33.5 37.5C31.46 37.5 29.657 36.87 28 35.5V33.5Z"
            fill={palette.wave}
            opacity="0.75"
          />
        </svg>
      </span>
      <div className="leading-tight">
        <span className={cn("block font-black tracking-tight", dimensions.title, palette.title)}>HiBoAir</span>
        {showTagline && (
          <span className={cn("font-medium", dimensions.tagline, palette.tagline)}>Air Quality Intelligence</span>
        )}
      </div>
    </div>
  );
}
