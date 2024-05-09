import { createContext, useContext, useState } from "react";

const UIStateContext = createContext();

export function useUIState() {
  return useContext(UIStateContext);
}

function UIStateProvider({ children }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <UIStateContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </UIStateContext.Provider>
  );
}

export default UIStateProvider;
