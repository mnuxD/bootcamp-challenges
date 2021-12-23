import "../App.css";
import { Link } from "react-router-dom";

const Pokemon = ({ id, name, ability, image }) => {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="pokemon">
        <img src={image} width={200} />
        <p>{name}</p>
        <p>{ability}</p>
      </div>
    </Link>
  );
};

export default Pokemon;
