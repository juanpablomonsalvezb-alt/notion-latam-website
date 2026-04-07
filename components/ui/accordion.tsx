"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-notion-border dark:border-notion-border-dark">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left font-medium text-notion-text-primary dark:text-notion-text-dark hover:text-notion-blue transition-colors"
      >
        {question}
        <ChevronDown
          className={cn(
            "h-5 w-5 text-notion-text-secondary transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="pb-5 text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
