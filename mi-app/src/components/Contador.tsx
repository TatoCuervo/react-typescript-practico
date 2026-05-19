import { useState } from "react";

export function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <button
        type="button"
        disabled={cuenta === 0}
        onClick={() => setCuenta((prev) => Math.max(prev - 1, 0))}
      >
        −
      </button>
      <span>Cuenta: {cuenta}</span>

      <button
        type="button"
        disabled={cuenta === 10}
        onClick={() => setCuenta((prev) => Math.min(prev + 1, 10))}
      >
        +
      </button>
      <button type="button" onClick={() => setCuenta(0)}>
        Reiniciar
      </button>
      {cuenta === 10 && <p>"Maximo Alcanzado!"</p>}
    </div>
  );
}
