"use client";

import { useActionState } from "react";
import { sendContactForm, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { success: false, errors: {} };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactForm,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-lg mx-auto">
      {state.success && (
        <p className="text-green-600 font-medium">{state.message}</p>
      )}

      {/* Nombre */}
      <div className="flex flex-col gap-1">
        <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {state.errors.nombre && (
          <p className="text-red-500 text-xs">{state.errors.nombre}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {state.errors.email && (
          <p className="text-red-500 text-xs">{state.errors.email}</p>
        )}
      </div>

      {/* Asunto */}
      <div className="flex flex-col gap-1">
        <label htmlFor="asunto" className="text-sm font-medium text-gray-700">
          Asunto
        </label>
        <input
          id="asunto"
          name="asunto"
          type="text"
          placeholder="Asunto del mensaje"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {state.errors.asunto && (
          <p className="text-red-500 text-xs">{state.errors.asunto}</p>
        )}
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-1">
        <label htmlFor="mensaje" className="text-sm font-medium text-gray-700">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          placeholder="Escribe tu mensaje..."
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />
        {state.errors.mensaje && (
          <p className="text-red-500 text-xs">{state.errors.mensaje}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}