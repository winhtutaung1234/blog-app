import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useUIState } from "../providers/UIStateProvider";

import {
  Home as HomeIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  PersonAdd as RegisterIcon,
} from "@mui/icons-material";

function AppDrawer() {
  const { openDrawer, setOpenDrawer } = useUIState();
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
    >
      <Box sx={{ width: 300 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton disableRipple>
              <ListItemIcon>
                <IconButton>
                  <HomeIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
        <ListItem disablePadding>
          <ListItemButton disableRipple>
            <ListItemIcon>
              <IconButton>
                <LoginIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disableRipple>
            <ListItemIcon>
              <IconButton>
                <RegisterIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton disableRipple>
            <ListItemIcon>
              <IconButton>
                <LogoutIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
}

export default AppDrawer;
