import { useState } from "react";
import { Reloj } from "./components/Reloj";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h1>Reloj con useEffect</h1>
      <button type="button" onClick={() => setVisible((v) => !v)}>
        {visible ? "Ocultar" : "Mostrar"} reloj
      </button>
      {visible ? <Reloj /> : <p>Reloj desmontado</p>}
    </div>
  );
}

export default App;
