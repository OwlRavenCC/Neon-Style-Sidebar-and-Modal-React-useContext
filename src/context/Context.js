import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarState, setSidebarState] = useState(false);
  const [modalState, setModalState] = useState(false);

  const toggleORS = (state, setState) => {
    setState(!state);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarState,
        modalState,
        setSidebarState,
        setModalState,
        toggleORS,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
