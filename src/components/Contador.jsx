import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };
  const reiniciar = () => {
    setContador(0);
  };
  return (
    <>
      <h2>Contador</h2>
      <h3>Cantidad: {contador}</h3>
      <button onClick={handleClick}>CLick</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </>
  );
}
