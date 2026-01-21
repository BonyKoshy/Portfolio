"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { cn } from "@/shared/lib/utils";
import { useEffect, useState } from "react";

interface ParallaxItem {
  id: string;
  content: React.ReactNode;
}

export const ParallaxScroll = ({
  items,
  className,
}: {
  items: ParallaxItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        // Top of 'md' range / start of 'lg'
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Assign transforms to columns (Left, Center, Right)
  const transforms = [translateFirst, translateSecond, translateThird];

  // If items are few (< 4), disable parallax and show a standard grid for better alignment
  if (items.length < 4) {
    return (
      <div className={cn("w-full py-10 px-10 max-w-7xl mx-auto", className)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {items.map((item) => (
            <div key={item.id} className="w-full">
              {item.content}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Distribution Logic
  // 3 Columns: [0, 2, 1] -> Fill Left, then Right, then Center (User preference to balance edges)
  // 2 Columns: [0, 1] -> Fill Left, then Right
  const getColIndex = (index: number, cols: number) => {
    if (cols === 3) {
      const pattern = [0, 2, 1]; // Left, Right, Center
      return pattern[index % 3];
    }
    return index % cols;
  };

  const parts = Array.from({ length: columns }, (_, colIndex) => {
    return items.filter(
      (_, itemIndex) => getColIndex(itemIndex, columns) === colIndex
    );
  });

  return (
    <div className={cn("items-start w-full", className)}>
      <div
        className={cn(
          "grid items-start max-w-7xl mx-auto gap-10 py-10 px-10",
          columns === 2 ? "grid-cols-2" : "grid-cols-3"
        )}
      >
        {parts.map((part, colIdx) => (
          <div className="grid gap-10" key={`col-${colIdx}`}>
            {part.map((el, idx) => (
              <motion.div
                style={{ y: transforms[colIdx]! }}
                key={`grid-${colIdx}-${idx}`}
              >
                {el.content}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
