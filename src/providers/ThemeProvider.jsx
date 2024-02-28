import { createTheme } from "@mui/material";
import { useContext } from "react";
import { createContext } from "react";
import { useMemo } from "react";
import { useState } from "react";
theme

const ThemeContext = createContext();
export function useThemeContext() {
    return useContext(ThemeContext);
}

export default function ThemeProvider() {
    const [mode, setMode] = useState('dark');

    const theme = useMemo(() => {
        return  createTheme({
            palette: {
                mode
            }
        });

    }, [mode]);

    return <ThemeContext.Provider value={{ mode, setMode }}>
        <ThemeProvider>

        </ThemeProvider>
    </ThemeContext.Provider>
}