"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { cn } from "@/shared/lib";

export function SmoothCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const rotateVal = useMotionValue(0); 
  
  // Spring config
  const springConfig = { damping: 25, stiffness: 700 };
  const rotateSpring = useSpring(rotateVal, { damping: 20, stiffness: 300 });
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorState, setCursorState] = useState<"default" | "pointer" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastX = -100;
    let lastY = -100;
    let currentRotation = 0;

    const handleFirstMove = () => {
        setIsVisible(true);
        // Inject global style to hide cursor everywhere
        const style = document.createElement('style');
        style.innerHTML = '*, body, html { cursor: none !important; }';
        style.id = 'cursor-style';
        document.head.appendChild(style);
        window.removeEventListener("mousemove", handleFirstMove);
    };
    window.addEventListener("mousemove", handleFirstMove);

    const moveCursor = (e: MouseEvent) => {
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      
      // Update rotation only for default cursor
      if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
        const angleArgs = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        const deltaAngle = angleArgs - (currentRotation % 360);
        let shortestDelta = ((deltaAngle + 180) % 360) - 180;
        if (shortestDelta < -180) shortestDelta += 360; 
        
        currentRotation += shortestDelta;
        rotateVal.set(currentRotation);
      }

      cursorX.set(e.clientX); 
      cursorY.set(e.clientY);

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        
        // Fast checks using tagName and closest - triggers NO reflow
        const isText = target.matches('input, textarea, [contenteditable="true"]') || target.closest('input, textarea, [contenteditable="true"]');
        const isPointer = target.matches('button, a, [role="button"], .cursor-pointer') || target.closest('button, a, [role="button"], .cursor-pointer');

        if (isText) {
            setCursorState("text");
        } else if (isPointer) {
            setCursorState("pointer");
        } else {
            setCursorState("default");
        }
    };



    // ... moveCursor logic ...
    
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
        const style = document.getElementById('cursor-style');
        if (style) style.remove();
        
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("mouseover", handleMouseOver);
        window.removeEventListener("mousemove", handleFirstMove);
    };
  }, [cursorX, cursorY, rotateVal]);

  if (!isVisible) return null;

  return (
    <motion.div
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-[99999] flex items-center justify-center bg-red-500/50 w-8 h-8 rounded-full", // WRAPPED FOR DEBUG
      )}
      style={{ 
        x: cursorXSpring, 
        y: cursorYSpring,
        width: 0, 
        height: 0,
      }}
    >
        <AnimatePresence mode="wait">
            {cursorState === "text" && (
                <motion.div
                    key="text"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="relative"
                >
                   {/* Text Cursor: 32px scaled to ~24px (75%) */}
                   <img 
                     src="/text-cursor-32.png" 
                     alt="Text Cursor"
                     width={24} // Visual width
                     height={24}
                     className="w-6 h-6 object-contain drop-shadow-md cursor-invert"
                   />
                </motion.div>
            )}

            {cursorState === "pointer" && (
                 <motion.div
                    key="pointer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="relative -translate-x-[2px] -translate-y-[2px]" // Fine tune center if needed
                 >
                    {/* Pointer: 30px scaled to ~24px (80%) */}
                   <img 
                     src="/hand-cursor-30.png" 
                     alt="Pointer Cursor"
                     width={24}
                     height={24}
                     className="w-6 h-6 object-contain drop-shadow-md cursor-invert"
                   />
                 </motion.div>
            )}

            {cursorState === "default" && (
                <motion.div
                    key="default"
                    style={{
                        rotate: rotateSpring,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="relative flex items-center justify-center"
                >
                    {/* Default: 24px natural size */}
                    <img 
                        src="/select-cursor-24.png"
                        alt="Default Cursor"
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain drop-shadow-md cursor-invert"
                        // Rotate initial image if needed, assuming it points up/left naturally?
                        // If it points top-left, we rotate it to point right for 0 degrees?
                        // Standard cursors point top-left.
                        // Motion angle 0 usually means right.
                        // So we might need offset. 
                        // Let's assume user wants 'seamless rotation' meaning the tip follows direction.
                        // Standard arrow (top-left) needs -135deg offset to point right (0deg)?
                        // Or -90 if up is 0?
                        // JS Math.atan2(y, x): 0 is Right, 90 is Down.
                        // Cursor tip at Top-Left. 
                        // To point Right, we need to rotate +135deg.
                        style={{ transform: "rotate(90deg)" }} // Adjust based on visual. Common arrow points -45deg (Top-Left).
                        // If we rotate +45 -> Points Up. +135 -> Points Right.
                        // Let's try 135deg offset to align "top" of arrow to "right" direction?
                        // Wait, user said "rotates backward... seamless rotate".
                        // Standard logic: Tip leads.
                        // If arrow points Top-Left (-45deg visual), and we are moving Right (0deg).
                        // We need visual +135deg to make it point Right.
                        // Let's start with a transform offset.
                   />
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
  );
}
