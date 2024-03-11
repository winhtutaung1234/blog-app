import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFeedBack, setOpenMessage } from "../app/messageSlice";

export default function Register() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const cityRef = useRef();

    const [error, setError] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const api = import.meta.env.VITE_API_URL;

    const handleSubmit = async () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const city = cityRef.current.value;
        const password = passwordRef.current.value;

        if(!name || !email || !city || !password) {
            setError("All field required");
            return false;
        }

        const res = await fetch(`${api}/register`, {
            method: "post",
            body: JSON.stringify({ name, email, city, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (res.status === 400) {
            const { error } = await res.json();
            setError(error.map(err => err.msg).join(', '));
            return false;
        }

        if(!res.ok) {
            setError((await res.json()).msg );
            return false;
        }

        dispatch(setFeedBack("Register success"));
        dispatch(setOpenMessage());
        navigate("/login");
    }

    return <Box>
        <Typography variant="h4" sx={{ mb: 3 }}>Register</Typography>
        {error && 
            <Alert severity="warning" sx={{ my: 2 }}>
                {error}
            </Alert>
        }
        <form onSubmit={e => {
            e.preventDefault();
            handleSubmit();
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