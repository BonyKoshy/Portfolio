import { RevealOnScroll } from "@/shared/ui/RevealOnScroll/RevealOnScroll";
import { GitHubCalendar } from "react-github-calendar";

export const GithubActivityFooter = () => {
  return (
    <section className="mt-6 sm:mt-8 pb-12">
      <RevealOnScroll>
        <div className="flex flex-col gap-6 w-full max-w-4xl ml-auto">
          <div>
            <h2 className="text-2xl font-light tracking-tight text-fg-primary mb-2">
              Still building...
            </h2>
            <p className="text-fg-tertiary text-sm font-light">
              My latest open-source contributions and engineering activity.
            </p>
          </div>

          <div className="w-full overflow-x-auto pb-4 no-scrollbar flex justify-end">
            <div className="min-w-[800px] border border-border-default rounded-xl p-6 bg-bg-surface ml-auto flex justify-end [&_svg]:ml-auto">
              <GitHubCalendar
                username="BonyKoshy"
                colorScheme="dark"
                theme={{
                  dark: ["#161b22", "#4c2889", "#5b21b6", "#7c3aed", "#a78bfa"],
                }}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                blockRadius={2}
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
