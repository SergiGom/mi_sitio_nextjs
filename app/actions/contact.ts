"use server";

export type ContactState = {
  success: boolean;
  errors: {
    nombre?: string;
    email?: string;
    asunto?: string;
    mensaje?: string;
  };
  message?: string;
};

export async function sendContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const asunto = formData.get("asunto") as string;
  const mensaje = formData.get("mensaje") as string;

  const errors: ContactState["errors"] = {};

  if (!nombre || nombre.trim().length < 2)
    errors.nombre = "El nombre debe tener al menos 2 caracteres.";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Ingresa un email válido.";

  if (!asunto || asunto.trim().length < 3)
    errors.asunto = "El asunto debe tener al menos 3 caracteres.";

  if (!mensaje || mensaje.trim().length < 10)
    errors.mensaje = "El mensaje debe tener al menos 10 caracteres.";

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // Aquí iría el envío real (email, DB, etc.)
  console.log("Formulario recibido:", { nombre, email, asunto, mensaje });

  return {
    success: true,
    errors: {},
    message: "¡Mensaje enviado correctamente!",
  };
}