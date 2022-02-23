import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const obtenerGanador = (state) => {
  return state.candidatos.candidatos.reduce((max, obj) =>
    max.votos > obj.votos ? max : obj
  );
};
export const Ganador = () => {
  const { nombre: nombreGanador } = useSelector(obtenerGanador);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Ganador:</Typography>

        <Typography variant="h3">{nombreGanador}</Typography>
      </CardContent>
    </Card>
  );
};
