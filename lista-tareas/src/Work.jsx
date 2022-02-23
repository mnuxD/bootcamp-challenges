import { useState } from "react";
import "./App.css";

const Work = ({ title, state }) => {
  const [status, setStatus] = useState(state);
  const completed = () => {
    setStatus(1);
  };
  const uncompleted = () => {
    setStatus(0);
  };
  
  return (
    <div className="work">
      <p className="title-work">{title}</p>
      <p className="status-work">
        Tarea {status ? "completada" : "incompleta"}
      </p>
      {status ? (
        <div className="button-container">
          <button onClick={uncompleted} className="button--blue">
            Marcar incompletada
          </button>
          <button className="button--red">Eliminar</button>
        </div>
      ) : (
        <div className="button-container">
          <button onClick={completed} className="button--blue">
            Marcar completada
          </button>
          <button className="button--orange">Editar</button>
        </div>
      )}
    </div>
  );
};

export default Work;
