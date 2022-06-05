import "antd/dist/antd.css";
import "./_Workshop.scss";
import { Card, Button, Input } from "antd";

const Workshop = () => {
  return (
    <div className="root">
      <div className="inputContainer">
        <h2>List
          a de Tareas</h2>
        <p>Título de la tarea</p>
        <Input />
        <label htmlFor="">Escriba la tarea que desea registrar</label>
        <Button type="primary">Registrar</Button>
      </div>
      <div className="cardContainer">
        <Card className="card">
          <h3>Comprar leche</h3>
          <label>Tarea incompleta</label>
          <div className="card__button">
            <Button type="primary">Hola</Button>
            <Button type="primary" className="red">
              Bola
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Workshop;
