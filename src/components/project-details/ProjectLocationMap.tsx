// components/project-details/ProjectLocationMap.tsx
"use client";

import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import type { MapContainerProps, TileLayerProps, MarkerProps, PopupProps } from 'react-leaflet';
import type { Icon, IconOptions } from 'leaflet';

// Type for the icon prototype fix
interface IconDefaultPrototype {
  _getIconUrl?: string;
}

const ProjectLocationMap = () => {
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: React.ComponentType<MapContainerProps>;
    TileLayer: React.ComponentType<TileLayerProps>;
    Marker: React.ComponentType<MarkerProps>;
    Popup: React.ComponentType<PopupProps>;
  } | null>(null);

  const [Leaflet, setLeaflet] = useState<{
    Icon: new (options: IconOptions) => Icon;
    IconDefault: {
      prototype: IconDefaultPrototype;
      mergeOptions: (options: IconOptions) => void;
    };
  } | null>(null);

  useEffect(() => {
    (async () => {
      const L = await import('leaflet');
      const RL = await import('react-leaflet');
      
      // Type-safe fix for default marker icons
      const iconDefault = L.Icon.Default as unknown as {
        prototype: IconDefaultPrototype;
        mergeOptions: (options: IconOptions) => void;
      };
      
      delete iconDefault.prototype._getIconUrl;
      iconDefault.mergeOptions({
        iconRetinaUrl: '/marker-icon-2x.png',
        iconUrl: '/marker-icon.png',
        shadowUrl: '/marker-shadow.png',
      });

      setMapComponents({
        MapContainer: RL.MapContainer,
        TileLayer: RL.TileLayer,
        Marker: RL.Marker,
        Popup: RL.Popup
      });
      setLeaflet({ 
        Icon: L.Icon,
        IconDefault: iconDefault
      });
    })();
  }, []);

  if (!MapComponents || !Leaflet) {
    return (
      <div className="h-[300px] md:h-[600px] flex items-center justify-center">
        Loading map...
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = MapComponents;
  const { Icon } = Leaflet;

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