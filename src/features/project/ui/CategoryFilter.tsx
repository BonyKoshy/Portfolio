import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Brain, Globe, Monitor, Database, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  className?: string;
}

const categories = [
  { id: "AI Solutions", label: "AI Solutions", icon: Brain },
  { id: "Web Architecture", label: "Web Architecture", icon: Globe },
  { id: "Desktop & Systems", label: "Desktop & Systems", icon: Monitor },
  { id: "Backend Systems", label: "Backend Systems", icon: Database },
];

export const CategoryFilter = ({
  selectedCategory,
  onSelectCategory,
  className,
}: CategoryFilterProps) => {
  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      <style>{`
        .thin-scrollbar::-webkit-scrollbar {
          height: 2px;
        }
        .thin-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb {
          background-color: var(--border-default);
          border-radius: 9999px;
        }
      `}</style>

      <div className="thin-scrollbar flex flex-nowrap items-center gap-3 overflow-x-auto py-2 -mx-4 px-4 md:mx-0 md:px-1">
        {/* All Projects Button */}
        <button
          onClick={() => onSelectCategory(null)}
          className={cn(
            "group relative flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 overflow-hidden shrink-0",
            selectedCategory === null
              ? "border-primary"
              : "bg-bg-subtle text-text-secondary border-transparent hover:border-border-default hover:text-text-primary"
          )}
        >
          {/* Active Background */}
          {selectedCategory === null && (
            <motion.div
              className="absolute inset-0 bg-primary z-0"
              layoutId="activeFilter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}

          {/* Content */}
          <div
            className={cn(
              "relative z-10 flex items-center gap-2",
              selectedCategory === null ? "!text-white" : ""
            )}
          >
            <LayoutGrid size={16} />
            <span
              className={cn(
                "text-sm font-medium",
                selectedCategory !== null && "max-[425px]:hidden"
              )}
            >
              All
            </span>
          </div>
        </button>

        {/* Separator */}
        <div className="w-px h-6 bg-border-subtle shrink-0 mx-1" />

        {/* Category Buttons */}
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id;
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(isSelected ? null : category.id)}
              className={cn(
                "group relative flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 overflow-hidden shrink-0",
                isSelected
                  ? "border-primary pr-3"
                  : "bg-bg-subtle text-text-secondary border-transparent hover:border-border-default hover:text-text-primary"
              )}
            >
              {isSelected && (
                <motion.div
                  className="absolute inset-0 bg-primary z-0"
                  layoutId="activeFilter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <div
                className={cn(
                  "relative z-10 flex items-center gap-2",
                  isSelected ? "!text-white" : ""
                )}
              >
                <Icon size={16} />
                <span
                  className={cn(
                    "text-sm font-medium",
                    !isSelected && "max-[425px]:hidden"
                  )}
                >
                  {category.label}
                </span>

                <AnimatePresence>
                  {isSelected && (
                    <motion.span
                      initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                      animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                      exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                      className="flex items-center"
                    >
                      <X size={14} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
