import { createSlice, current } from "@reduxjs/toolkit";

export const candidatosSlice = createSlice({
  name: "candidatos",
  initialState: {
    candidatos: [
      { nombre: "Hugo", votos: 0, propuestas: "Hacer un puente" },
      { nombre: "Paco", votos: 0, propuestas: "Construir un colegio" },
      { nombre: "Luis", votos: 0, propuestas: "Mejorar las pistas" },
    ],
  },
  reducers: {
    votar: (state, { payload: candidatoIndex }) => {
      state.candidatos[candidatoIndex].votos += 1;
    },
    nuevoCandidato: (state, { payload: candidato }) => {
      if (candidato !== null) {
        state.candidatos.push({
          nombre: `${candidato.firstName} ${candidato.lastName}`,
          votos: 0,
          propuestas: candidato.propuestas,
        });
      }
    },
  },
});
export const { votar, nuevoCandidato } = candidatosSlice.actions;
export default candidatosSlice.reducer;
