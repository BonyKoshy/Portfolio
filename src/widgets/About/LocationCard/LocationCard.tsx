import React from "react";
import { MapPin } from "lucide-react";
import DottedMap from "@/shared/ui/DottedMap/DottedMap";

const LocationCard: React.FC = () => {
  const markers = [
    {
      lat: 10.0, // Kerala approx
      lng: 76.5,
      size: 0.6,
    },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-bg-paper rounded-xl group select-none cursor-default">

      {/* Background/Map Container - Zoomed to Asia */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full scale-[1.7] -translate-x-[30%] -translate-y-[10%] md:scale-[2.2] md:-translate-x-[35%] md:-translate-y-[15%] opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.8] group-hover:-translate-x-[30%] group-hover:-translate-y-[10%] md:group-hover:scale-[2.4] md:group-hover:-translate-x-[35%] md:group-hover:-translate-y-[15%]">
           <DottedMap 
             markers={markers} 
             markerColor="#3b82f6" 
           />
        </div>
      </div>

      {/* Gradient Overlay & Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pt-24 bg-linear-to-t from-bg-paper via-bg-paper/80 to-transparent flex flex-col justify-end items-center z-10">

        <div className="flex items-center gap-2 text-fg-primary translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
          <MapPin className="text-primary drop-shadow-[0_0_8px_var(--primary)]" size={18} />

          <span className="text-base font-semibold tracking-wide drop-shadow-md">Based in Kerala, India</span>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;



