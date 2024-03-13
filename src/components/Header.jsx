import { 
    DarkMode, 
    LightMode, 
    Menu as MenuIcon,
    ArrowBack as BackIcon,
} from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setOpenDrawer } from "../app/appDrawerSlice";
import { getMode, setMode } from "../app/themeProviderSlice";

import { useLocation, useNavigate } from "react-router-dom";


export default function Header() {
    const dispatch = useDispatch();
    const mode = useSelector(getMode);

    const { pathname } = useLocation();
    const navigate = useNavigate();

    return <AppBar position="static">
        <Toolbar>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
                {pathname === "/" ? (
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => {
                            dispatch(setOpenDrawer());
                        }}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => {
                            navigate(-1);
                        }}>
                        <BackIcon />
                    </IconButton>
                )}
                
                <Typography variant="h6" sx={{ mt: .5, ml: 2 }}>Blog</Typography>
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