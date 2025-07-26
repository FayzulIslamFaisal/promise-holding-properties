// components/project-details/ProjectLocationMap.tsx
"use client";

import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import type { Icon } from 'leaflet';

const ProjectLocationMap = () => {
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: any;
    TileLayer: any;
    Marker: any;
    Popup: any;
    Icon: typeof Icon;
  } | null>(null);

  useEffect(() => {
    (async () => {
      // Dynamically import both react-leaflet and leaflet
      const L = await import('leaflet');
      const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
      
      // Fix for default marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/marker-icon-2x.png',
        iconUrl: '/marker-icon.png',
        shadowUrl: '/marker-shadow.png',
      });

      setMapComponents({ MapContainer, TileLayer, Marker, Popup, Icon: L.Icon });
    })();
  }, []);

  if (!MapComponents) return <div className="h-[300px] md:h-[600px] flex items-center justify-center">Loading map...</div>;

  const { MapContainer, TileLayer, Marker, Popup, Icon } = MapComponents;
  const customIcon = new Icon({
    iconUrl: '/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <section>
      <div className="mx-auto w-full">
        <div className="w-full relative md:h-[600px] h-[300px] overflow-hidden">
          <MapContainer
            center={[23.794531, 90.366308]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[23.794531, 90.366308]} icon={customIcon}>
              <Popup>
                <div className="text-sm font-semibold">Dhaka City</div>
                <div className="text-xs">Project Location</div>
              </Popup>
            </Marker>
          </MapContainer>

          <div className="absolute inset-0 z-50 w-full h-full bg-[var(--custom-bg-accent)]/50 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ProjectLocationMap;