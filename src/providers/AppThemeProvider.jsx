import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

function AppThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ mode, setMode }}>
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default AppThemeProvider;
