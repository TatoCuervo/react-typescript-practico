import { useState, type FormEvent } from "react";
import { emailValido } from "../utils/validarEmail";

export function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [resumen, setResumen] = useState<ResumenEnviado | null>(null);

  const emailOk = emailValido(email);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailOk) return;
    setEnviado(true);
    setResumen({ nombre, email, mensaje });
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  type ResumenEnviado = { nombre: string; email: string; mensaje: string };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Contacto</h2>
        <label>
          Nombre
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!emailOk && email.length > 0 && (
            <p style={{ color: "crimson" }}>Introduce un email válido.</p>
          )}
        </label>
        <label>
          Mensaje
          <textarea
            name="mensaje"
            rows={4}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </label>
        <button type="submit" disabled={!emailOk}>
          Enviar
        </button>
      </form>

      {resumen && (
        <div
          style={{ marginTop: "1rem", padding: "1rem", background: "#f0f0f0" }}
        >
          <h3>Resumen enviado</h3>
          <p>
            <strong>Nombre:</strong> {resumen.nombre}
          </p>
          <p>
            <strong>Email:</strong> {resumen.email}
          </p>
          <p>
            <strong>Mensaje:</strong> {resumen.mensaje}
          </p>
        </div>
      )}
    </>
  );
}
