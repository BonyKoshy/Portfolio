import Container from "../Container";

const PageSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse bg-(--background) overflow-hidden">
      {/* HERO SKELETON 
          Synced to match Hero.tsx: justify-start + pt-32 
      */}
      <section className="relative flex w-full flex-col justify-start pt-32 pb-20">
        <Container>
          <div className="flex flex-col items-start w-full">
            {/* 1. Logo */}
            <div className="mb-8 h-16 w-16 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50 sm:mb-12 sm:h-20 sm:w-20 md:h-24 md:w-24"></div>

            {/* 2. Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              {/* Line */}
              <div className="hidden h-px w-20 bg-zinc-200/50 dark:bg-zinc-800/50 sm:block"></div>
              {/* Text */}
              <div className="h-4 w-36 rounded bg-zinc-200/50 dark:bg-zinc-800/50"></div>
            </div>

            {/* 3. Headline */}
            <div className="mb-6 space-y-3 w-full max-w-4xl">
              <div className="h-10 w-3/4 rounded-2xl bg-zinc-200/50 dark:bg-zinc-800/50 sm:h-14 lg:h-16"></div>
              <div className="h-10 w-1/2 rounded-2xl bg-zinc-200/50 dark:bg-zinc-800/50 sm:h-14 lg:h-16"></div>
            </div>

            {/* 4. Subtext */}
            <div className="mb-8 max-w-2xl space-y-3 w-full">
              <div className="h-4 w-full rounded bg-zinc-200/50 dark:bg-zinc-800/50 sm:h-5"></div>
              <div className="h-4 w-2/3 rounded bg-zinc-200/50 dark:bg-zinc-800/50 sm:h-5"></div>
            </div>

            {/* 5. Actions */}
            <div className="flex flex-col gap-4 w-full sm:flex-row sm:items-center sm:gap-8">
              {/* Primary */}
              <div className="h-12 w-full rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 sm:w-48"></div>
              {/* Secondary */}
              <div className="h-12 w-32 rounded-full bg-transparent sm:w-32"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROJECTS SKELETON (Unchanged) */}
      <section className="pb-32">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 space-y-2">
              <div className="h-8 w-48 rounded bg-zinc-200/50 dark:bg-zinc-800/50"></div>
              <div className="h-4 w-64 rounded bg-zinc-200/30 dark:bg-zinc-800/30"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-4/3 w-full rounded-2xl bg-zinc-200/50 dark:bg-zinc-800/50"></div>
                  <div className="space-y-2 pt-2">
                    <div className="h-6 w-3/4 rounded bg-zinc-200/50 dark:bg-zinc-800/50"></div>
                    <div className="h-4 w-1/2 rounded bg-zinc-200/50 dark:bg-zinc-800/50"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PageSkeleton;
