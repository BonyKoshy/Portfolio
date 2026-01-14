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

// Security: Basic input validation to prevent injection in dangerous usage (DottedMap library output is HTML string)
export const isSafeColor = (color: string) => {
  // Reject if it contains dangerous characters commonly used for injection: < > " ' `
  return !/[<>"'`]/.test(color);
};

const DottedMap: React.FC<DottedMapProps> = ({
  markers = [],
  className,
  dotColor,
  markerColor = "var(--primary)", // Default primary for marker
}) => {
  // context removed as it was unused

  const svgMap = useMemo(() => {
    // Create map instance
    const map = new DottedMapLib({ height: 60, grid: "diagonal" });

    // Validate inputs before using them in SVG generation
    const safeMarkerColor =
      markerColor && isSafeColor(markerColor) ? markerColor : "var(--primary)";
    const safeDotColor =
      dotColor && isSafeColor(dotColor) ? dotColor : "var(--fg-secondary)";

    // Add markers
    markers.forEach((marker) => {
      map.addPin({
        lat: marker.lat,
        lng: marker.lng,
        svgOptions: { color: safeMarkerColor, radius: marker.size || 0.4 },
      });
    });

    // Generate SVG
    const svgStr = map.getSVG({
      radius: 0.22,
      color: safeDotColor,
      shape: "circle",
      backgroundColor: "transparent",
    });

    // Final safety check: ensure no <script> tags made it into the output
    if (svgStr.includes("<script")) {
      console.error(
        "🛡️ Sentinel blocked potential XSS in DottedMap: <script> tag detected in SVG output."
      );
      return "";
    }

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
