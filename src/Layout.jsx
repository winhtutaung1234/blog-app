import { Container } from "@mui/material";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import AppDrawer from "./components/AppDrawer";

function Layout() {
  return (
    <>
      <AppDrawer />
      <Header />
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
