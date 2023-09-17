import { useState } from "react";
import ComopentList from "./ComopentList";

function UserApp() {
  const [endPoint, setEndPoint] = useState(true);

  const handleUsers = () => {
    setEndPoint(!endPoint);
  };

  return (
    <>
      <h1>Lista usuarios</h1>
      <button onClick={handleUsers}>
        Cargar: {endPoint ? "comments" : "users"}
      </button>
      <ComopentList endPoint={endPoint}></ComopentList>
    </>
  );
}

export default UserApp;
