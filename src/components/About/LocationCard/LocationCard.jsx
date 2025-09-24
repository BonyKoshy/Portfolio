// src/components/About/LocationCard/LocationCard.jsx
import React, { useState } from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { MapPin } from 'lucide-react';
import './LocationCard.css';

function LocationCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="location-card">
      <div className="location-title">
        <MapPin className="location-icon" size={24} />
        <h3>Location:</h3>
      </div>

      <HoverCard.Root open={isOpen} onOpenChange={setIsOpen}>
        <HoverCard.Trigger asChild>
          <button
            type="button"
            className="location-link"
            onClick={() => setIsOpen(true)}
          >
            Pathanamthitta, Kerala, India
          </button>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content
            className="hover-card-content"
            sideOffset={5}
            onPointerDownOutside={(e) => {
              e.preventDefault();
              setIsOpen(false);
            }}
          >
            <img
              src="/pathanamthitta.jpg"
              alt="Pathanamthitta"
              className="tooltip-image"
            />
            <div className="tooltip-text">
              <h4>Pathanamthitta, Kerala</h4>
              <p>
                Known as the "Pilgrim Capital of Kerala," Pathanamthitta is a town nestled in the Western Ghats, famous for its scenic beauty, rivers, and religious shrines.
              </p>
            </div>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
}

export default LocationCard;