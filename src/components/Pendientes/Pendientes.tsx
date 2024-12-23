import DeleteButton from "../DeleteButton/DeleteButton";

import "./Pendientes.css";

function Pendientes() {
  let pendientes = ["tarea jijero", "tarea jijona", "tarea juju"];

  return (
    <div>
      <ul>
        {pendientes.map((pendiente) => (
          <div className="item-pendiente">
            <li key={pendiente}>{pendiente}</li>
            <DeleteButton />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Pendientes;
