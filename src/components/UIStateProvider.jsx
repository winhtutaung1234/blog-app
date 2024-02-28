import { createContext, useContext, useState } from "react";

const UIStateContext = createContext();

export function useUIState() {
    return useContext(UIStateContext);
}

export default function UIStateProvider({children}) {
    const [open, setOpen] = useState(false);

    return <UIStateContext.Provider value={{ open, setOpen }}>
        {children}
    </UIStateContext.Provider>
}