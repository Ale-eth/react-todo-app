import AddButton from "./AddButton";
import AddTaskInput from "./AddTaskInput";
import Pendientes from "./Pendientes";

function MainContainer() {
  return (
    <>
      <h2>LISTA DE TAREAS</h2>
      <AddTaskInput />
      <AddButton />

      <h3>Pendientes</h3>
      <Pendientes />

      <h3>Finalizadas</h3>
    </>
  );
}

export default MainContainer;
