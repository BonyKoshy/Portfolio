import { HTMLAttributes } from "react";
import { cn } from "@/shared/lib";

interface SafariProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  srcs?: string[];
  url?: string;
}

export function Safari({ src, url = "https://magicui.design", className, ...props }: SafariProps) {
  return (
    <div className={cn("relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900", className)} {...props}>
      <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center">
          <div className="mx-auto max-w-md rounded-md bg-gray-200 px-3 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400">
            {url}
          </div>
        </div>
      </div>
      <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-800">
        {src && <img src={src} alt="Project Preview" className="h-full w-full object-cover" />}
      </div>
    </div>
  );
}
