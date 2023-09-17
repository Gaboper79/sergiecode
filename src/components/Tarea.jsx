import "../styles/tarea.css";
import { useState } from "react";

export default function Tarea({ nombre, estado, id }) {
  const [state, setState] = useState(estado);

  const cambiarEstado = () => setState(!state);
  return (
    <li>
      <button
        className={state ? "realizada" : "noRealizada"}
        onClick={cambiarEstado}>
        {id}.Tarea:{nombre}
        {state && "-OK"}
      </button>
    </li>
  );
}
