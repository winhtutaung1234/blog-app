import { useEffect, useRef } from "react";
import { useAuthUser } from "../components/AuthUser"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFeedBack, setOpenMessage } from "../app/messageSlice";
import { Button, TextField } from "@mui/material";

export default function AddArticle() {
    const { authUser } = useAuthUser();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const titleRef = useRef();
    const bodyRef = useRef();

    useEffect(() => {
        if(Object.keys(authUser).length === 0) {
            navigate("/");
        }

    }, [authUser]);

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