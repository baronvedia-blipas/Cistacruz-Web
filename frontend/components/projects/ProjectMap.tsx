"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

// Santa Cruz project locations (approximate coordinates)
const projectLocations = [
  { id: "the-master-tms", title: "The Master (TMS)", lat: -17.74, lng: -63.16, category: "Construcción" },
  { id: "rem-gr", title: "REM - GR", lat: -17.77, lng: -63.19, category: "Remodelación" },
  { id: "rossytex", title: "Rossytex", lat: -17.78, lng: -63.18, category: "Comercial" },
  { id: "fisiobel", title: "Fisiobel", lat: -17.785, lng: -63.175, category: "Comercial" },
  { id: "proyecto-rb", title: "Proyecto RB", lat: -17.76, lng: -63.15, category: "Construcción" },
  { id: "proyecto-sahonero", title: "Proyecto Sahonero", lat: -17.72, lng: -63.22, category: "Construcción" },
  { id: "churrasquera-mendizabal", title: "Churrasquera Mendizabal", lat: -17.795, lng: -63.165, category: "Comercial" },
];

const categoryColors: Record<string, string> = {
  "Construcción": "#2c7be5",
  "Remodelación": "#c9a84c",
  "Comercial": "#10b981",
};

export default function ProjectMap() {
  const { locale } = useI18n();
  const [MapComponent, setMapComponent] = useState<any>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues with Leaflet
    import("react-leaflet").then((mod) => {
      import("leaflet").then((L) => {
        // Fix default marker icon
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        });
        setMapComponent({ ...mod, L });
      });
    });
  }, []);

  if (!MapComponent) {
    return (
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionTitle
            title={locale === "es" ? "Mapa de Proyectos" : "Project Map"}
            subtitle={locale === "es" ? "Ubicaciones de nuestros proyectos en Santa Cruz." : "Locations of our projects in Santa Cruz."}
          />
          <div className="h-[500px] bg-gray-100 rounded-sm animate-pulse" />
        </Container>
      </section>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = MapComponent;
  const L = MapComponent.L;

  function createIcon(color: string) {
    return new L.DivIcon({
      html: `<div style="background:${color};width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`,
      className: "",
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionTitle
          title={locale === "es" ? "Mapa de Proyectos" : "Project Map"}
          subtitle={locale === "es" ? "Ubicaciones de nuestros proyectos en Santa Cruz." : "Locations of our projects in Santa Cruz."}
        />

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-3 h-3 rounded-full" style={{ background: color }} />
              <span>{cat}</span>
            </div>
          ))}
        </div>

        <div className="h-[500px] rounded-sm overflow-hidden shadow-lg">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
          />
          <MapContainer
            center={[-17.775, -63.18]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {projectLocations.map((loc) => (
              <Marker
                key={loc.id}
                position={[loc.lat, loc.lng]}
                icon={createIcon(categoryColors[loc.category] || "#2c7be5")}
              >
                <Popup>
                  <div className="font-sans">
                    <strong className="text-brand-navy">{loc.title}</strong>
                    <br />
                    <span className="text-xs text-gray-500">{loc.category}</span>
                    <br />
                    <a
                      href={`/proyectos/${loc.id}`}
                      className="text-xs text-brand-blue hover:underline"
                    >
                      {locale === "es" ? "Ver proyecto" : "View project"} &rarr;
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Container>
    </section>
  );
}
