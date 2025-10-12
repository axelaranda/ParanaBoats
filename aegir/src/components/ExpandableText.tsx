"use client";
import React, { useState } from "react";

type ExpandableTextProps = {
  text: string;
  initialLines?: number;         
  className?: string;            
  collapsedClassName?: string;   
  expandedClassName?: string;    
};

export default function ExpandableText({
  text,
  initialLines = 4,
  className = "text-sm text-gray-600 font-roboto",
  collapsedClassName,
  expandedClassName,
}: ExpandableTextProps) {
  const [open, setOpen] = useState(false);

  const base = [
    className,
    "select-text transition-all duration-300 ease-in-out",
  ];
  const stateClass = open
    ? expandedClassName ?? "line-clamp-none"
    : collapsedClassName ?? `line-clamp-${initialLines}`;

  return (
    <p
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={() => setOpen(v => !v)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(v => !v)}
      className={[...base, stateClass].join(" ")}
    >
      {text}
    </p>
  );
}
