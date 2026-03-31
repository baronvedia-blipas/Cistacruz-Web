"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroStagger, fadeUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { formatWhatsAppUrl } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";

function TextScramble({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let frame = 0;
    const totalFrames = 20;
    const interval = setInterval(() => {
      const progress = frame / totalFrames;
      const revealed = Math.floor(progress * text.length);

      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          result += " ";
        } else if (i < revealed) {
          result += text[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplay(result);
      frame++;
      if (frame > totalFrames) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{display || text}</span>;
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
          className="absolute inset-0 w-full h-[120%] object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3194277/3194277-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <Container>
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-brand-blue text-sm tracking-[0.5em] uppercase font-sans font-medium mb-4"
            >
              <TextScramble text="DISEÑO · CONSTRUCCIÓN · SUPERVISIÓN" />
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
            >
              Construimos
              <br />
              tu <span className="text-brand-blue">éxito</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mb-8"
            >
              Transformamos ideas en espacios excepcionales con más de una década
              de experiencia en diseño, construcción y supervisión de obras en
              Santa Cruz, Bolivia.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button href="/proyectos" variant="outline" size="lg">
                Ver Proyectos
              </Button>
              <Button
                href={formatWhatsAppUrl(
                  COMPANY_INFO.whatsapp,
                  "Hola, me gustaría solicitar una cotización."
                )}
                size="lg"
              >
                Contáctanos
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-white/60" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
