import Contador from "./components/Contador";
import ListadoApp from "./components/ListadoApp";
import UserApp from "./components/User/UserApp";
import "./styles/app.css";

export const App = () => {
  return (
    <>
      <UserApp></UserApp>
      <hr />
      <Contador></Contador>
      <hr />
      <ListadoApp></ListadoApp>
    </>
  );
};
