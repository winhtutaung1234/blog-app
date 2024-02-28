import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";

export default function Register() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const cityRef = useRef();

    return <Box>
        <Typography variant="h4" sx={{ mb: 3 }}>Register</Typography>
        <form onSubmit={e => {
            e.preventDefault();
        }}>
            <TextField 
                label="name"
                sx={{ mb: 2 }}
                fullWidth
                inputRef={nameRef}
            />
            <TextField 
                type="email"
                label="email"
                sx={{ mb: 2 }}
                fullWidth
                inputRef={emailRef}
            />
            <TextField 
                label="city"
                sx={{ mb: 2 }}
                fullWidth
                inputRef={cityRef}
            />
            <TextField 
                type="password"
                label="password"
                sx={{ mb: 2 }}
                fullWidth
                inputRef={passwordRef}
            />
            <Button variant="contained" type="submit" fullWidth>Register</Button>
        </form>
    </Box>
}