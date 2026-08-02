import { LineSidebar, LineSidebarItem } from "@/shared/ui/LineSidebar";

interface ProjectArchiveSidebarProps {
  activeId: string;
}

const SIDEBAR_STRUCTURE: LineSidebarItem[] = [
  { isHeader: true, label: "Engineering" },
  { isHeader: false, label: "Connectly", id: "connectly" },
  { isHeader: false, label: "Emotion Detector", id: "emotion-detector" },
  { isHeader: false, label: "MAUI Organizer", id: "maui-file-organizer" },
  { isHeader: false, label: "Timeless Library", id: "timeless-library" },
  { isHeader: true, label: "Client" },
  { isHeader: false, label: "Downloads Org", id: "downloads-organizer" },
  { isHeader: false, label: "Marvel Timeline", id: "marvel-timeline" },
  { isHeader: false, label: "Metadata Timeline", id: "metadata-timeline" },
  { isHeader: true, label: "Learning" },
  { isHeader: false, label: "Inventory System", id: "inventory-system" },
  { isHeader: false, label: "Space Impact", id: "space-impact" },
  { isHeader: false, label: "OpenVINO Sentiment", id: "openvino-sentiment" },
  { isHeader: true, label: "Footer/End" },
];

export const ProjectArchiveSidebar = ({
  activeId,
}: ProjectArchiveSidebarProps) => {
  const activeIndex = SIDEBAR_STRUCTURE.findIndex((p) => p.id === activeId);

  const handleItemClick = (index: number) => {
    const item = SIDEBAR_STRUCTURE[index];
    if (item && !item.isHeader && item.id) {
      const el = document.getElementById(item.id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <aside className="sticky top-28 self-start w-full hidden lg:block select-none py-2">
      <LineSidebar
        items={SIDEBAR_STRUCTURE}
        activeIndex={activeIndex >= 0 ? activeIndex : 1}
        showIndex={false}
        showMarker={true}
        scaleTick={true}
        accentColor="#ffffff"
        textColor="rgba(255, 255, 255, 0.45)"
        markerColor="rgba(255, 255, 255, 0.25)"
        fontSize={1}
        itemGap={40}
        markerLength={20}
        markerGap={0}
        proximityRadius={40}
        maxShift={30}
        tickScale={0.5}
        smoothing={100}
        onItemClick={handleItemClick}
      />
    </aside>
  );
};
