import {
  Grid,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";

const ListaCandidatos = () => {
  const candidatos = useSelector((state) => {
    return state.candidatos.candidatos;
  });
  const dispatch = useDispatch();
  return (
    <Grid
      container
      item
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "2rem",
        padding: "1rem",
      }}
    >
      {candidatos.map((candidato, index) => {
        return (
          <UserCard
            name={candidato.nombre}
            votos={candidato.votos}
            photo="https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg"
            description={candidato.propuestas || "No tiene propuestas"}
          />
        );
      })}
    </Grid>
  );
};

export default ListaCandidatos;
