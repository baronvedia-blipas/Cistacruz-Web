import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/layout/ScrollToTop";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";
import { QuoteModalProvider } from "@/components/layout/QuoteModal";
import { I18nProvider } from "@/lib/i18n";
import ServiceWorkerRegister from "@/components/layout/ServiceWorkerRegister";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cistacruz.com"),
  title: {
    default: "Constructora Cistacruz SRL — Diseño, Construcción y Supervisión de Obras",
    template: "%s | Constructora Cistacruz SRL",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/icons/icon-192.svg",
  },
  manifest: "/manifest.json",
  themeColor: "#2c7be5",
  description:
    "Empresa constructora en Santa Cruz de la Sierra, Bolivia. Especialistas en diseño arquitectónico, construcción y supervisión de obras civiles y comerciales. Más de 10 años de experiencia.",
  keywords: [
    "constructora Santa Cruz",
    "construcción Bolivia",
    "diseño arquitectónico",
    "supervisión de obras",
    "Cistacruz",
    "constructora boliviana",
  ],
  authors: [{ name: "Constructora Cistacruz SRL" }],
  openGraph: {
    type: "website",
    locale: "es_BO",
    siteName: "Constructora Cistacruz SRL",
    title: "Constructora Cistacruz SRL — Construimos tu éxito",
    description:
      "Diseño, construcción y supervisión de obras con los más altos estándares de calidad en Santa Cruz, Bolivia.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <I18nProvider>
        <QuoteModalProvider>
          <Preloader />
          <CustomCursor />
          <TopBar />
          <Navbar />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
          <ServiceWorkerRegister />
        </QuoteModalProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
