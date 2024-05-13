import { Menu, DarkMode, ArrowBack, LightMode } from "@mui/icons-material";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";
import { useUIState } from "../providers/UIStateProvider";
import { useAuthUser } from "../providers/AuthUserProvider";
import { blue } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router-dom";
import { useThemeContext } from "../providers/AppThemeProvider";

function Header() {
  const { setOpenDrawer } = useUIState();
  const { authUser } = useAuthUser();

  const { pathname } = useLocation();
  const { mode, setMode } = useThemeContext();

  const changeMode = () => {
    {
      mode === "light" ? setMode("dark") : setMode("light");
    }
  };

  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        {pathname === "/" ? (
          <IconButton
            color="inherit"
            sx={{ mr: 3 }}
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
            <Menu />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            sx={{ mr: 3 }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBack />
          </IconButton>
        )}

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blog App
        </Typography>
        {authUser && (
          <Avatar
            sx={{
              width: 30,
              height: 30,
              fontSize: 15,
              mr: 2,
              backgroundColor: blue[900],
            }}
          >
            {authUser.name[0]}
          </Avatar>
        )}
        <IconButton
          color="inherit"
          onClick={() => {
            changeMode();
          }}
        >
          {mode === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
