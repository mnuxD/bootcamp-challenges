import { createContext, useState, useContext } from "react";
import { NotificacionesContext } from "./NotificacionesContext";

export const CandidatosContext = createContext();

export const CandidatosProvider = ({ children }) => {
  const { setNotificacion } = useContext(NotificacionesContext);
  const [candidatos, setCandidatos] = useState([
    { nombre: "Hugo", votos: 0 },
    { nombre: "Paco", votos: 0 },
    { nombre: "Luis", votos: 0 },
  ]);

  const votar = (votarPor) => {
    const nuevosVotos = votarPor.votos + 1;

    const nuevos = candidatos.map((candidato) => {
      if (candidato.nombre === votarPor.nombre) {
        return {
          ...candidato,
          votos: nuevosVotos,
        };
      }
      return { ...candidato };
    });

    setCandidatos(nuevos);
    setNotificacion(`Votaste por el candidato: ${votarPor.nombre}`);
  };

  const nuevoCandidato = (candidato) => {
    setCandidatos((oldCandidatos) => [
      ...oldCandidatos,
      { nombre: `${candidato.firstName} ${candidato.lastName}`, votos: 0 },
    ]);
    setNotificacion("Canidato añadido");
  };

  return (
    <CandidatosContext.Provider value={{ candidatos, votar, nuevoCandidato }}>
      {children}
    </CandidatosContext.Provider>
  );
};
