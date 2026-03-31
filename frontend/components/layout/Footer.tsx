"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white">
      <div className="border-t border-white/10">
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="font-sans text-white font-bold text-xl tracking-[0.3em] uppercase">
                  Cistacruz <span className="text-brand-blue">SRL</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {COMPANY_INFO.slogan}. Diseño, construcción y supervisión de
                obras con los más altos estándares de calidad en Santa Cruz,
                Bolivia.
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-brand-blue hover:bg-brand-blue/20 transition-all"
                    aria-label={link.name}
                  >
                    {link.icon === "instagram" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    )}
                    {link.icon === "facebook" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    )}
                    {link.icon === "whatsapp" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">
                Enlaces
              </h3>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-brand-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">
                Servicios
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/servicios" className="text-gray-400 text-sm hover:text-brand-blue transition-colors">
                    Diseño Arquitectónico
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-gray-400 text-sm hover:text-brand-blue transition-colors">
                    Construcción
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-gray-400 text-sm hover:text-brand-blue transition-colors">
                    Supervisión de Obras
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-gray-400 text-sm hover:text-brand-blue transition-colors">
                    Supervisión de Condominios
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">
                Contacto
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                  <span>{COMPANY_INFO.address}</span>
                </li>
                <li>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-brand-blue transition-colors"
                  >
                    <Phone size={16} className="shrink-0 text-brand-blue" />
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 text-gray-400 text-sm hover:text-brand-blue transition-colors"
                  >
                    <Mail size={16} className="shrink-0 text-brand-blue" />
                    {COMPANY_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-xs">
            <p>
              &copy; {currentYear} {COMPANY_INFO.name}. Todos los derechos
              reservados.
            </p>
            <p>Santa Cruz de la Sierra, Bolivia</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
