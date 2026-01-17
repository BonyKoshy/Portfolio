import { homeContent } from "@/shared/config/content";

/** Displays profile image and role in a tooltip card. */
export const ProfileTooltipCard = () => (
  <div className="relative flex aspect-2/3 w-40 flex-col overflow-hidden rounded-xl border border-border-default bg-bg-surface shadow-2xl">
    <img
      src="/profile-image.webp"
      alt={homeContent.hero.tooltips.profile.alt}
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full p-3 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-white">
        {homeContent.hero.tooltips.profile.role}
      </p>
    </div>
  </div>
);
