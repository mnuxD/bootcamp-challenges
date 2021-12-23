import { Link } from "react-router-dom";
import "./_Home.css";

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <Link to={"/emoji"}>
        <button className="links">Ir a Emojis</button>
      </Link>
      <Link to={"/gif-generator"}>
        <button className="links">Ir a Gif Generator</button>
      </Link>
      <Link to={"/paint"}>
        <button className="links">Ir a Paint</button>
      </Link>
    </>
  );
};

export default Home;
