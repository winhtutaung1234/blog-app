import { Menu, DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useUIState } from "../providers/UIStateProvider";

function Header() {
  const { openDrawer, setOpenDrawer } = useUIState();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          sx={{ mr: 3 }}
          onClick={() => {
            setOpenDrawer(true);
          }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blog App
        </Typography>
        <IconButton color="inherit">
          <DarkMode />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
