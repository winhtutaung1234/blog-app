import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { useUIState } from "./UIStateProvider";
import { useAppTheme } from "../providers/AppThemeProvider";

export default function Header() {
    const {open, setOpen} = useUIState();

    const {mode, setMode} = useAppTheme();

    return <AppBar position="static">
        <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
                <IconButton color="inherit" onClick={() => setOpen(true)}>
                    <Menu />
                </IconButton>
            </Box>
            <Box>
                {mode === "light" ? 
                    <IconButton color="inherit" onClick={() => {
                        setMode('dark');
                    }}>
                        <DarkMode />
                    </IconButton>    
                    : 
                    <IconButton color="inherit" onClick={() => {
                        setMode('light');
                    }}>
                        <LightMode />
                    </IconButton>
                }
            </Box>
        </Toolbar>
    </AppBar>
}