import DeleteButton from "../DeleteButton/DeleteButton";

import "./Pendientes.css";

function Pendientes(props: { tarea: string }) {
  let pendientes = [""];

  return (
    <div>
      <ul>
        {pendientes.map((pendiente, index) => (
          <div className="item-pendiente" key={index}>
            <li>{pendiente}</li>
            <DeleteButton />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Pendientes;

//<div>
//<ul>
//  {pendientes.map((pendiente) => (
//    <div className="item-pendiente">
//      <li key={pendiente}>{pendiente}</li>
//      <DeleteButton />
//    </div>
//  ))}
//</ul>
//</div>
