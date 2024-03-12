import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getMode } from "../app/themeProviderSlice";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function AppThemeProvider({ children }) {
    const mode = useSelector(getMode);

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode,
                ...(mode === "light"? {
                        banner: { background: "#e1e1e1" },
                    } : {
                        banner: { background: "#222" },
                    })
            }
        })
    }, [mode]);

    return <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
}