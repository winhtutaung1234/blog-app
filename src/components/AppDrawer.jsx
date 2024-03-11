import { 
    Box, 
    Drawer, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText
 } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getOpenDrawer, setOpenDrawer } from "../app/appDrawerSlice";

import {
    Home as HomeIcon,
    PersonAdd as RegisterIcon,
    Login as LoginIcon,
    Logout as LogoutIcon,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useAuthUser } from "./AuthUser";

export default function AppDrawer() {
    const openDrawer = useSelector(getOpenDrawer);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { setAuthUser } = useAuthUser();

    return <Drawer
            open={openDrawer}
            anchor="left"
            onClose={() => dispatch(setOpenDrawer())}
        >
            <Box sx={{ width: 300 }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton disableRipple onClick={() => {
                            navigate("/");
                            dispatch(setOpenDrawer());
                        }}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton disableRipple onClick={() => {
                            navigate("/register");
                            dispatch(setOpenDrawer());
                        }}>
                            <ListItemIcon>
                                <RegisterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Register" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton disableRipple onClick={() => {
                            navigate("/login");
                            dispatch(setOpenDrawer());
                        }}>
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton disableRipple onClick={() => {
                            localStorage.removeItem("token");
                            setAuthUser({});
                            dispatch(setOpenDrawer());
                        }}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
    </Drawer>
}