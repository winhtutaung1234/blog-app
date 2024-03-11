import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFeedBack, setOpenMessage } from "../app/messageSlice";
import { useAuthUser } from "../components/AuthUser";

export default function Login() {
    const emailRef = useRef();
    const passRef = useRef();
    const { setAuthUser } = useAuthUser();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [error, setError] = useState("");

    const handleSubmit = async () => {
        const email = emailRef.current.value;
        const password = passRef.current.value;

        if(!email || !password) {
            setError("All required");
            return false;
        }

        const api = import.meta.env.VITE_API_URL;
        const res = await fetch(`${api}/login`, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(!res.ok) {
            setError("something wrong. please try again.");
            return false;
        }

        const data = await res.json();
        localStorage.setItem("token", data.token);   

        const user_res = await fetch(`${api}/verify`, {
            headers: {
                'Authorization': `Bearer ${data.token}`
            }
        });

        const user = await user_res.json();

        if(user) {
            setAuthUser(user);
        }

        dispatch(setFeedBack("Login success"));
        dispatch(setOpenMessage());
        navigate("/");      
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