import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { createContext, useContext, useMemo } from "react";
import { useState } from "react";

const AppThemeContext = createContext();

export function useAppTheme() {
    return useContext(AppThemeContext);
}

export default function AppThemeProvider({children}) {
    const [mode, setMode] = useState('dark');

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode
            }
        })
    }, [mode]);

    return <AppThemeContext.Provider value={{ mode, setMode }}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </AppThemeContext.Provider>
}