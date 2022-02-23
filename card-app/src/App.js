import logo from "./logo.svg";
import "./App.css";
import UserCard from "./UserCard";

function App() {
  return (
    <div className="App">
      <UserCard
        name="Sara Conor"
        rating="3"
        photo="https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg"
        description="Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion "
      />
    </div>
  );
}

export default App;
