import { useState } from 'react';
import { cn } from '@/shared/lib/utils';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

export function CopyButton({ textToCopy, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "group relative flex items-center justify-center p-2 rounded-lg transition-all duration-300",
        "bg-bg-surface hover:bg-bg-paper border border-border-default/50 hover:border-fg-primary/20",
        "focus:outline-none focus:ring-2 focus:ring-fg-primary/20",
        className
      )}
      aria-label="Copy to clipboard"
    >
      {/* Tooltip */}
      <span className={cn(
        "absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-mono text-bg-default bg-fg-primary rounded opacity-0 invisible transition-all duration-200 pointer-events-none whitespace-nowrap",
        "group-hover:opacity-100 group-hover:visible group-hover:-top-8",
        copied && "opacity-0 invisible" // Hide default tooltip when copied
      )}>
        Copy to clipboard
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-fg-primary rotate-45" />
      </span>

      {/* Copied Tooltip */}
      <span className={cn(
        "absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-mono text-bg-default bg-fg-primary rounded opacity-0 invisible transition-all duration-200 pointer-events-none whitespace-nowrap",
        copied && "opacity-100 visible -top-8"
      )}>
        Copied!
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-fg-primary rotate-45" />
      </span>

      <div className="relative w-5 h-5">
        <Copy 
            className={cn(
                "w-5 h-5 transition-all duration-300 absolute inset-0 text-fg-secondary group-hover:text-fg-primary",
                copied ? "opacity-0 scale-50" : "opacity-100 scale-100"
            )} 
        />
        <Check 
            className={cn(
                "w-5 h-5 transition-all duration-300 absolute inset-0 text-green-500",
                copied ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )} 
        />
      </div>
    </button>
  );
}
