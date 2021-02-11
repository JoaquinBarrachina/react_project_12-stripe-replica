import React, { useState, useContext } from "react";
import sublinks from "./data";

//Creacion de contexto
const AppContext = React.createContext();

/*Creacion de proveedor
En index se le pasara como parametros hijos todo el arbol de componentes
Aqui se le da acceso al contexto de la app y se renderizara (en el return van todos los componentes envueltos)
*/

const AppProvider = ({ children }) => {
  //sidebar and submenu status
  const [isSbOpen, setIsSbOpen] = useState(false);
  const [isSmOpen, setIsSmOpen] = useState(false);
  //submenu location
  const [location, setLocation] = useState({});
  //submenu page
  const [page, setPage] = useState({ page: "", links: [] });

  //Methods
  const openSidebar = () => {
    setIsSbOpen(true);
  };

  const closeSidebar = () => {
    setIsSbOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const pageHover = sublinks.find((item) => item.page === text);
    setPage(pageHover);
    setLocation(coordinates);
    setIsSmOpen(true);
  };

  const closeSubmenu = () => {
    setIsSmOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSmOpen,
        isSbOpen,
        openSubmenu,
        closeSubmenu,
        closeSidebar,
        openSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/*Custom Hook to ease steps of invoking useContext and AppContext in every
Component */

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
