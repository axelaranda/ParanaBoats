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

  const clampMap: Record<number, string> = {
    1: "line-clamp-1",
    2: "line-clamp-2",
    3: "line-clamp-3",
    4: "line-clamp-4",
    5: "line-clamp-5",
    6: "line-clamp-6",
  };

  const collapsed = collapsedClassName ?? clampMap[initialLines] ?? "line-clamp-4";
  const expanded = expandedClassName ?? "line-clamp-none";
  const stateClass = open ? expanded : collapsed;

  return (
    <p
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={() => setOpen(v => !v)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(v => !v)}
      className={[
        className,
        "select-text transition-all duration-300 ease-in-out",
        "whitespace-pre-wrap", 
        "cursor-pointer",
        stateClass,
      ].join(" ")}
    >
      {text}
    </p>
  );
}
