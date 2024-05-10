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
  Add as AddIcon,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../providers/AuthUserProvider";

function AppDrawer() {
  const { openDrawer, setOpenDrawer } = useUIState();
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useAuthUser();

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => {
        closeDrawer();
      }}
    >
      <Box sx={{ width: 300 }}>
        <List>
          {authUser && (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  disableRipple
                  onClick={() => {
                    navigate("/");
                    closeDrawer();
                  }}
                >
                  <ListItemIcon>
                    <IconButton>
                      <HomeIcon />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  disableRipple
                  onClick={() => {
                    navigate("/add-article");
                    closeDrawer();
                  }}
                >
                  <ListItemIcon>
                    <IconButton>
                      <AddIcon />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText primary="Add Article" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  disableRipple
                  onClick={() => {
                    setAuthUser("");
                    closeDrawer();
                  }}
                >
                  <ListItemIcon>
                    <IconButton>
                      <LogoutIcon />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </>
          )}

          {!authUser && (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  disableRipple
                  onClick={() => {
                    navigate("/login");
                    closeDrawer();
                  }}
                >
                  <ListItemIcon>
                    <IconButton>
                      <LoginIcon />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  disableRipple
                  onClick={() => {
                    navigate("/register");
                    closeDrawer();
                  }}
                >
                  <ListItemIcon>
                    <IconButton>
                      <RegisterIcon />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
}

export default AppDrawer;
