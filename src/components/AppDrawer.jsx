import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useUIState } from "./UIStateProvider";
import { useNavigate } from "react-router-dom";
import { LightMode } from "@mui/icons-material";

export default function AppDrawer() {
    const {open, setOpen} = useUIState();
    const navigate = useNavigate();

    return <Drawer 
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}>

        <Box sx={{ width: 300 }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton disableRipple
                        onClick={() => {
                            navigate("/");
                            setOpen(false);
                        }}
                    >
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton disableRipple
                        onClick={() => {
                            navigate("/login");
                            setOpen(false);
                        }}
                    >
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton disableRipple
                        onClick={() => {
                            navigate("/register");
                            setOpen(false);
                        }}
                    >
                        <ListItemText primary="Register" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton disableRipple>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Drawer>

}