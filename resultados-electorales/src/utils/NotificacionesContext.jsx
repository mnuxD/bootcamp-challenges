import { createContext, useState } from "react";

export const NotificacionesContext = createContext();

export const NotificacionesProvider = ({ children }) => {
  const [notificacion, setNotificacion] = useState("Mensaje de prueba");
  return (
    <NotificacionesContext.Provider value={{ notificacion, setNotificacion }}>
      {children}
    </NotificacionesContext.Provider>
  );
};
