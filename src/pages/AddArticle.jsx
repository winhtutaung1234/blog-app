import { useRef } from "react";
import { Button, TextField } from "@mui/material";

export default function AddArticle() {
    const titleRef = useRef();
    const bodyRef = useRef();

    return <form onSubmit={e => {
        e.preventDefault();
    }}>
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
        <Button variant="outlined" color="success">
            + Add Article
        </Button>
    </form>
}