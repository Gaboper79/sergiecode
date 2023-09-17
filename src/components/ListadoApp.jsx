import { AgregarTarea } from "./AgregarTarea";
import Tarea from "./Tarea";
import { useState } from "react";

const ListadoApp = () => {
  let listadoTareas = [
    { id: 1, nombre: "Tarea-1", estado: true },
    { id: 2, nombre: "Tarea-2", estado: true },
    { id: 3, nombre: "Tarea-3", estado: false },
    { id: 4, nombre: "Tarea-4", estado: false },
    { id: 5, nombre: "Tarea-5", estado: false },
  ];

  const [arreglo, setArreglo] = useState(listadoTareas);
  const onAddTask = (val) => {
    if (val < 1) return;
    setArreglo([
      ...arreglo,
      { nombre: val, estado: false, id: arreglo.length + 1 },
    ]);
  };
  return (
    <>
      <h2>Listado</h2>
      <div className="Contenedor-agregarTarea">
        <AgregarTarea addTask={onAddTask}></AgregarTarea>
      </div>

      <div>
        {arreglo.map((item) => (
          <Tarea
            key={item.id}
            id={item.id}
            nombre={item.nombre}
            estado={item.estado}></Tarea>
        ))}
      </div>
    </>
  );
};

export default ListadoApp;
