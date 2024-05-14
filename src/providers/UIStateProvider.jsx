import { createContext, useContext, useState } from "react";

const UIStateContext = createContext();

export function useUIState() {
  return useContext(UIStateContext);
}

function UIStateProvider({ children }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);

  return (
    <UIStateContext.Provider
      value={{
        openDrawer,
        setOpenDrawer,
        menu,
        setMenu,
        menuPosition,
        setMenuPosition,
      }}
    >
      {children}
    </UIStateContext.Provider>
  );
}

export default UIStateProvider;
