"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import type { ContactFormData } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(7, "Ingresa un teléfono válido"),
  projectType: z.string().min(1, "Selecciona un tipo de proyecto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Validate with Zod
    const result = contactSchema.safeParse(data);
    if (!result.success) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputStyles =
    "w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <input
          {...register("name", { required: "Nombre requerido" })}
          placeholder="Nombre completo *"
          className={inputStyles}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <input
            {...register("email", { required: "Email requerido" })}
            type="email"
            placeholder="Email *"
            className={inputStyles}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("phone", { required: "Teléfono requerido" })}
            type="tel"
            placeholder="Teléfono *"
            className={inputStyles}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <select
          {...register("projectType", { required: "Selecciona un tipo" })}
          className={inputStyles}
          defaultValue=""
        >
          <option value="" disabled>
            Tipo de proyecto *
          </option>
          <option value="residencial">Residencial</option>
          <option value="comercial">Comercial</option>
          <option value="remodelacion">Remodelación</option>
          <option value="supervision">Supervisión</option>
          <option value="otro">Otro</option>
        </select>
        {errors.projectType && (
          <p className="text-red-500 text-xs mt-1">
            {errors.projectType.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          {...register("message", { required: "Mensaje requerido" })}
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto *"
          className={`${inputStyles} resize-none`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </span>
        ) : (
          "Enviar Mensaje"
        )}
      </Button>

      {status === "success" && (
        <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 p-3 rounded-sm">
          <CheckCircle2 size={16} />
          Mensaje enviado correctamente. Nos pondremos en contacto pronto.
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-sm">
          <AlertCircle size={16} />
          Error al enviar el mensaje. Intenta nuevamente.
        </div>
      )}
    </form>
  );
}
