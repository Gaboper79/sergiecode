import { useState } from "react";

export const AgregarTarea = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const inputChange = (event) => {
    //setInputValue(inputValue);

    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(inputValue);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={inputValue}
          onChange={inputChange}
        />
      </form>
    </>
  );
};
