import { 
    Avatar,
    Box, 
    Drawer, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText,
    Typography
 } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getOpenDrawer, setOpenDrawer } from "../app/appDrawerSlice";

import {
    Home as HomeIcon,
    PersonAdd as RegisterIcon,
    Login as LoginIcon,
    Logout as LogoutIcon,
    AccountCircle as ProfileIcon,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useAuthUser } from "./AuthUser";
import { blue } from "@mui/material/colors";

export default function AppDrawer() {
    const openDrawer = useSelector(getOpenDrawer);
    const dispatch = useDispatch();
    const { authUser } = useAuthUser();

    console.log(authUser);

    const navigate = useNavigate();
    const { setAuthUser } = useAuthUser();

    return <Drawer
            open={openDrawer}
            anchor="left"
            onClose={() => dispatch(setOpenDrawer())}>
            
           
            <Box sx={{
                height: 200,
                display: "flex",
                bgcolor: "banner.background",
                alignItems: "center",
            }}>
                { Object.keys(authUser).length !== 0 &&
                     <>
                        <Avatar
                            sx={{
                                ml: 3,
                                backgroundColor: blue[500],
                                width: 70,
                                height: 70,
                            }}>
                                { authUser.name[0] }
                        </Avatar>
                        <Box sx={{ ml: 3 }}>
                            <Typography sx={{ fontSize: 18 }}>{authUser.name}</Typography>
                            <Typography sx={{ fontSize: 14, color: "green" }}>{authUser.email}</Typography>
                        </Box>
                     </>
                }
            </Box>

            <Box sx={{ width: 300 }}>
                <List>
                    { Object.keys(authUser).length !== 0  ? 
                        <>
                            <ListItem disablePadding>
                                <ListItemButton disableRipple onClick={() => {
                                    navigate("/");
                                    dispatch(setOpenDrawer());
                                }}>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton disableRipple onClick={() => {
                                    navigate(`profile/${authUser._id}`);
                                    dispatch(setOpenDrawer());
                                }}>
                                    <ListItemIcon>
                                        <ProfileIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Profile" />
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
                        </> : <>
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

                        </>
                    }                  
                </List>
            </Box>
    </Drawer>
}