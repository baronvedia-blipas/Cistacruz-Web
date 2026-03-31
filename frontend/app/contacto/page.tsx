import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Container from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "Ponte en contacto con Constructora Cistacruz SRL. Solicita una cotización para tu proyecto de construcción en Santa Cruz, Bolivia.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Contáctanos"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Contacto" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </Container>
      </section>

      {/* Google Maps */}
      <section className="h-96 bg-gray-100">
        <iframe
          src={COMPANY_INFO.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Constructora Cistacruz SRL"
        />
      </section>
    </>
  );
}
