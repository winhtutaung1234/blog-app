import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";

export default function Login() {
    const emailRef = useRef();
    const passRef = useRef();

    return <Box>
        <Typography variant="h4" sx={{ mb: 3 }}>
            Login
        </Typography>
        <form onSubmit={e => {
            e.preventDefault();
        }}>
            <TextField
                type="email"
                sx={{ mb: 2 }}
                label="email"
                fullWidth
                inputRef={emailRef}
            />
            <TextField
                type="password"
                sx={{ mb: 2 }}
                label="password"
                fullWidth
                inputRef={passRef}
            />
            <Button fullWidth variant="contained" type="submit">
                Login
            </Button>
        </form>
    </Box>
}