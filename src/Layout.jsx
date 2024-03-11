import { Alert, Box, Container, Fab, Snackbar } from "@mui/material";
import Header from "./components/Header";
import AppDrawer from "./components/AppDrawer";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpenMessage } from "./app/messageSlice";
import { Add } from "@mui/icons-material";

export default function Layout() {
    const openMessage = useSelector(state => state.message.openMessage);
    const feedBack = useSelector(state => state.message.feedBack);
    const dispatch = useDispatch();

    return <Box>
        <Box>
            <Header />
            <AppDrawer />
        </Box>
        <Container sx={{ mt: 5 }} maxWidth="sm">
            <Outlet />
            <Fab color="success" sx={{ position: "fixed", bottom: 40, right: 40 }}>
                <Add />
            </Fab>
        </Container>

        <Snackbar 
            open={openMessage}
            autoHideDuration={4000}
            onClose={() => {
                dispatch(setOpenMessage());
            }}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}>
            <Alert>{ feedBack }</Alert>
        </Snackbar>
    </Box>
}