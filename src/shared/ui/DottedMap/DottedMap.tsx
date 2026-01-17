import DottedMapLib from "dotted-map";
import React, { useMemo } from "react";

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  size?: number;
}

interface DottedMapProps {
  markers?: Marker[];
  className?: string;
  dotColor?: string;
  markerColor?: string;
}

/** Renders an interactive SVG dotted map visualization. */
const DottedMap: React.FC<DottedMapProps> = ({
  markers = [],
  className,
  dotColor,
  markerColor = "var(--primary)",
}) => {
  const svgMap = useMemo(() => {
    // Input validation for colors to prevent XSS
    const isSafeColor = (color?: string) => !color || !/[<>"']/.test(color);

    const safeMarkerColor = isSafeColor(markerColor)
      ? markerColor
      : "var(--primary)";
    const safeDotColor = isSafeColor(dotColor) ? dotColor : undefined;

    const map = new DottedMapLib({ height: 60, grid: "diagonal" });

    markers.forEach((marker) => {
      map.addPin({
        lat: marker.lat,
        lng: marker.lng,
        svgOptions: { color: safeMarkerColor, radius: marker.size || 0.4 },
      });
    });

    // Determines colors based on theme if not provided.
    const dots = safeDotColor || "var(--fg-secondary)";

    const svgStr = map.getSVG({
      radius: 0.22,
      color: dots,
      shape: "circle",
      backgroundColor: "transparent",
    });

    return svgStr;
  }, [markers, dotColor, markerColor]);

  return (
    <div
      className={`w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`}
      dangerouslySetInnerHTML={{ __html: svgMap }}
    />
  );
};

export default DottedMap;
