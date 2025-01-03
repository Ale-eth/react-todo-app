import AddButton from "../AddButton/AddButton";
import AddTaskInput from "../AddTaskInput/AddTaskInput";
import Pendientes from "../Pendientes/Pendientes";
import Finalizadas from "../Finalizadas/Finalizadas";
import LikeButton from "../Like/likeButton";

import "./MainContainer.css";

function MainContainer() {
  return (
    <div id="main-container">
      <h2>LISTA DE TAREAS</h2>
      <AddTaskInput />
      <AddButton />

      <h3>Pendientes</h3>
      <Pendientes tarea={"tarea jijero"} />

      <h3>Finalizadas</h3>
      <Finalizadas />

      <LikeButton />
    </div>
  );
}

export default MainContainer;
