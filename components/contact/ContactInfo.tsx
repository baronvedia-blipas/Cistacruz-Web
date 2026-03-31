import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const items = [
  {
    icon: <MapPin size={20} />,
    title: "Dirección",
    content: COMPANY_INFO.address,
  },
  {
    icon: <Phone size={20} />,
    title: "Teléfono",
    content: COMPANY_INFO.phone,
    href: `tel:${COMPANY_INFO.phone}`,
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    content: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
  },
  {
    icon: <Clock size={20} />,
    title: "Horario",
    content: "Lunes a Viernes: 8:00 - 18:00\nSábados: 8:00 - 12:00",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-brand-navy mb-2">
          Información de Contacto
        </h2>
        <p className="text-gray-500 text-sm">
          Estamos listos para atenderte. Contáctanos por cualquiera de estos
          medios.
        </p>
      </div>

      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-sans font-semibold text-brand-navy text-sm">
                {item.title}
              </h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-500 text-sm hover:text-brand-blue transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-500 text-sm whitespace-pre-line">
                  {item.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
