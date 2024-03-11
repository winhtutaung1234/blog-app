import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

export default function Login() {
    const emailRef = useRef();
    const passRef = useRef();

    const [error, setError] = useState("");

    const handleSubmit = () => {
        const email = emailRef.current.value;
        const password = passRef.current.value;

        if(!email || !password) {
            setError("All required");
            return false;
        }

        
    }

    return <Box>
        <Typography variant="h4" sx={{ mb: 3 }}>
            Login
        </Typography>
        { error && 
            <Alert severity="warning" sx={{ mb: 2 }}>{error}</Alert>
        }
        <form onSubmit={e => {
            e.preventDefault();
            handleSubmit();
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