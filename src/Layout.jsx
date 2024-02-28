import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import AppDrawer from "./components/AppDrawer";

export default function Layout() {
    return <Box>
        <Header />
        <AppDrawer />
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Outlet />
        </Container>
    </Box>
}