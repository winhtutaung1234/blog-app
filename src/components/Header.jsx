import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOpenDrawer, setOpenDrawer } from "../app/appDrawerSlice";
import { getMode, setMode } from "../app/themeProviderSlice";

export default function Header() {
    const dispatch = useDispatch();
    const mode = useSelector(getMode);

    return <AppBar position="static">
        <Toolbar>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
                <IconButton color="inherit" onClick={() => {
                    dispatch(setOpenDrawer());
                }}>
                    <Menu />
                </IconButton>
                <Typography variant="h6" sx={{ mt: .5, ml: 2 }}>Header</Typography>
            </Box>
            <IconButton color="inherit" onClick={() => {
                dispatch(setMode());
            }}>
                { mode === "light" ? 
                    <DarkMode />
                    : 
                    <LightMode />
                }
            </IconButton>
        </Toolbar>
    </AppBar>
}