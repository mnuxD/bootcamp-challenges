import "./App.css";
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Work from "./Work";

const works = [
  { title: "Lavar los platos", state: 0 },
  { title: "Limpiar la casa", state: 1 },
  { title: "Pasear al perro", state: 0 },
];
const App = () => {
  const [title, setTitle] = useState("");
  const addwork = () => {
    works.push({ title: title, state: 0 });
    setTitle("");
  };
  const delwork = () => {};

  return (
    <div className="App">
      <p className="title">Lista de tareas</p>
      <p className="subtitle">Titulo de la tarea</p>
      <TextField
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        id="newWork"
        size="small"
        helperText="Escibe la tarea que deseas registrar"
      />
      <button onClick={addwork} className="button--blue">
        Registrar
      </button>
      <div className="container-works">
        {works.map((work) => (
          <Work title={work.title} state={work.state} />
        ))}
      </div>
    </div>
  );
};

export default App;
