const PageSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse px-6 pt-24 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* 1. HERO SKELETON (Centered Layout) */}
        <div className="flex min-h-[70vh] flex-col justify-center space-y-8 py-20">
          {/* Status Pill */}
          <div className="h-8 w-64 rounded-full bg-white/5 border border-white/5"></div>

          {/* Main Title (2 Lines) */}
          <div className="space-y-4">
            <div className="h-16 w-3/4 max-w-2xl rounded-2xl bg-white/5 sm:h-24"></div>
            <div className="h-16 w-1/2 max-w-xl rounded-2xl bg-white/5 sm:h-24"></div>
          </div>

          {/* Subtitle */}
          <div className="space-y-3 pt-2">
            <div className="h-5 w-full max-w-md rounded-full bg-white/5"></div>
            <div className="h-5 w-2/3 max-w-sm rounded-full bg-white/5"></div>
          </div>

          {/* Buttons Row */}
          <div className="flex gap-4 pt-6">
            <div className="h-12 w-32 rounded-full bg-white/10"></div>
            <div className="h-12 w-36 rounded-full bg-white/5 border border-white/5"></div>
          </div>
        </div>

        {/* 2. PROJECTS SKELETON (Header + 3 Cards) */}
        <div className="mb-32">
          {/* Section Header */}
          <div className="mb-12 flex items-end justify-between border-b border-white/5 pb-4">
            <div className="space-y-2">
              <div className="h-8 w-48 rounded-lg bg-white/5"></div>
              <div className="h-4 w-64 rounded-full bg-white/5"></div>
            </div>
            <div className="h-4 w-32 rounded-full bg-white/5"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-4">
                {/* Image Area */}
                <div className="aspect-4/3 w-full rounded-xl bg-white/5 border border-white/5"></div>
                {/* Text Area */}
                <div className="space-y-2">
                  <div className="h-6 w-3/4 rounded bg-white/5"></div>
                  <div className="h-4 w-1/2 rounded bg-white/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. BENTO GRID SKELETON */}
        <div className="mb-32">
          <div className="mb-12 h-8 w-48 rounded-lg bg-white/5"></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 h-150">
            {/* Main Feature */}
            <div className="rounded-2xl bg-white/5 border border-white/5 md:col-span-2 md:row-span-2"></div>
            {/* Secondary Feature */}
            <div className="rounded-2xl bg-white/5 border border-white/5 md:col-span-2 md:row-span-1"></div>
            {/* Small Features */}
            <div className="rounded-2xl bg-white/5 border border-white/5 md:col-span-1 md:row-span-1"></div>
            <div className="rounded-2xl bg-white/5 border border-white/5 md:col-span-1 md:row-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
