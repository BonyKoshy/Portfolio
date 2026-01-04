"use client";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/shared/lib";

export function PixelImage({ src, className, alt }: { src: string; className?: string; alt?: string }) {
  const [loaded, setLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Pixelation factor: start high (blocky) -> end 1 (clear)
  // We can animate this value or just swap images?
  // "Transition from skelton to image"
  
  useEffect(() => {
    if (!loaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;

    img.onload = () => {
        // Animate resolution
        const pixelSize = 20; // Start with 20px blocks
        const targetPixelSize = 1;
        const duration = 1000; // 1s
        const startTime = performance.now();

        const animate = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease out

            const currentPixelSize = pixelSize - (pixelSize - targetPixelSize) * ease;
            
            if (progress < 1) {
                // Draw pixelated
                const w = canvas.width;
                const h = canvas.height;
                
                // Turn off smoothing for pixelated look
                ctx.imageSmoothingEnabled = false;

                // Calculate scaled dimensions
                const sw = w / currentPixelSize;
                const sh = h / currentPixelSize;

                // Draw small
                ctx.drawImage(img, 0, 0, sw, sh);
                // Draw back large
                ctx.drawImage(canvas, 0, 0, sw, sh, 0, 0, w, h);
                
                requestAnimationFrame(animate);
            } else {
                // Final draw clear
                ctx.imageSmoothingEnabled = true;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        };
        requestAnimationFrame(animate);
    };

  }, [loaded, src]);

  return (
    <div className={cn("relative overflow-hidden bg-gray-200 dark:bg-gray-800", className)}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className="opacity-0 absolute inset-0 w-full h-full object-cover" 
      />
      {loaded ? (
         <canvas 
            ref={canvasRef}
            width={800} // Hardcoded or dynamic? Better to match parent but difficult without ResizeObserver. 
            height={800} // Let's use CSS to size the canvas but internal res needs to be enough.
            className="w-full h-full object-cover"
         />
      ) : (
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px animate-pulse">
           {Array.from({ length: 16 }).map((_, i) => (
             <div key={i} className="bg-gray-300 dark:bg-gray-700" style={{ animationDelay: `${i * 50}ms` }} />
           ))}
        </div>
      )}
    </div>
  );
}
