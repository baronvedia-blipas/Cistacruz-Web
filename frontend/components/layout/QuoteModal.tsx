"use client";

import { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";
import { formatWhatsAppUrl } from "@/lib/utils";

interface QuoteContextType {
  openQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType>({ openQuote: () => {} });

export function useQuoteModal() {
  return useContext(QuoteContext);
}

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", phone: "", projectType: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.projectType) return;

    setStatus("loading");

    // Send to WhatsApp with pre-filled message
    const message = `Hola, soy ${form.name}. Me interesa una cotización para un proyecto ${form.projectType}. Mi teléfono es ${form.phone}.`;
    window.open(formatWhatsAppUrl(COMPANY_INFO.whatsapp, message), "_blank");

    setStatus("success");
    setTimeout(() => {
      setOpen(false);
      setStatus("idle");
      setForm({ name: "", phone: "", projectType: "" });
    }, 2000);
  };

  const inputStyles =
    "w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 transition-colors";

  return (
    <QuoteContext.Provider value={{ openQuote: () => setOpen(true) }}>
      {children}

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-white rounded-sm shadow-2xl z-[91] p-6 md:p-8"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>

              {status === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="mx-auto text-green-500 mb-4" size={48} />
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-2">
                    Enviado
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Te redirigimos a WhatsApp para continuar.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-2">
                    Cotización Rápida
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Completa estos datos y te contactamos al instante.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Tu nombre"
                      className={inputStyles}
                      required
                    />
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      type="tel"
                      placeholder="Tu teléfono / WhatsApp"
                      className={inputStyles}
                      required
                    />
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className={inputStyles}
                      required
                    >
                      <option value="" disabled>
                        Tipo de proyecto
                      </option>
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="remodelación">Remodelación</option>
                      <option value="supervisión">Supervisión</option>
                    </select>

                    <Button type="submit" disabled={status === "loading"} className="w-full">
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <Loader2 size={16} className="animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        "Solicitar Cotización"
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </QuoteContext.Provider>
  );
}
