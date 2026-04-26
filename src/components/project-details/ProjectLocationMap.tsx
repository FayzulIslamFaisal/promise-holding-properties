"use client";

import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import type { MapContainerProps, TileLayerProps, MarkerProps, PopupProps } from 'react-leaflet';
import type { Icon, IconOptions } from 'leaflet';
import { ProjectDetail } from '@/types/api';

// Type for the icon prototype fix
interface IconDefaultPrototype {
  _getIconUrl?: string;
}

interface ProjectLocationMapProps {
  project: ProjectDetail;
}

const ProjectLocationMap = ({ project }: ProjectLocationMapProps) => {
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

  // Default coordinate (Gulshan area)
  const position: [number, number] = [23.794531, 90.366308]; 

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
      <div className="h-[300px] md:h-[600px] flex items-center justify-center darkLight-text-color">
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
    <section className="pt-10 pb-10 md:pb-14 md:pt-14 border-b border-[var(--custom-bg-accent)]/40">
      <div className="mx-auto w-full">
        <div className="w-full relative md:h-[600px] h-[300px] overflow-hidden">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
            className="z-1"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                <div className="text-sm font-semibold">{project.project_name}</div>
                <div className="text-xs">{project.project_location}</div>
                {project.google_map_link && (
                    <a 
                        href={project.google_map_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--custom-bg-accent)] text-[10px] underline block mt-1"
                    >
                        Open in Google Maps
                    </a>
                )}
              </Popup>
            </Marker>
          </MapContainer>

          <div className="absolute inset-0 z-1 w-full h-full bg-[var(--custom-bg-primary)]/40 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ProjectLocationMap;
