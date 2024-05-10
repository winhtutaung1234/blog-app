import { Menu, DarkMode } from "@mui/icons-material";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import { useUIState } from "../providers/UIStateProvider";
import { useAuthUser } from "../providers/AuthUserProvider";
import { blue } from "@mui/material/colors";

function Header() {
  const { setOpenDrawer } = useUIState();
  const { authUser } = useAuthUser();

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
        <Avatar
          sx={{
            width: 30,
            height: 30,
            fontSize: 15,
            mr: 2,
            backgroundColor: blue[900],
          }}
        >
          {authUser && authUser.name[0]}
        </Avatar>
        <IconButton color="inherit">
          <DarkMode />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
