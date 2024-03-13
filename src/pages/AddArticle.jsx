import { useRef, useState } from "react";
import { Alert, Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddArticle() {
    const titleRef = useRef();
    const bodyRef = useRef();
    const imgRef = useRef();
    const navigate = useNavigate();

    const [error, setError] = useState();

    const handleSubmit = async () => {
        const title = titleRef.current.value;
        const body = bodyRef.current.value;
        const img = imgRef.current.files[0];

        if(!title || !body) {
            setError("title and body required");
            return false;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("body", body);

        if(img) {
            formData.append("image", img);
        }

        const api = import.meta.env.VITE_API_URL;
        const token = localStorage.getItem("token");

        const res = await fetch(`${api}/articles`, {
            method: "POST",
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if(!res.ok) {
            setError(( await res.json()).error[0].msg);
            return false;
        }
        
        navigate("/");
    }

    return <Box>
        { error && 
            <Alert severity="warning" sx={{ mb: 2 }}>{ error }</Alert>
        }
        <form onSubmit={e => {
            e.preventDefault();
            handleSubmit();
        }}>
            <TextField
                inputRef={imgRef}
                type="file"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                inputRef={titleRef}
                label="Title"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                inputRef={bodyRef}
                label="Body"
                fullWidth
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="outlined" color="success">
                + Add Article
            </Button>
        </form>
    </Box>
}