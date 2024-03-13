import { Avatar, Box, Button } from "@mui/material";
import ShowArticles from "../components/ShowArticles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile() {
    const { id } = useParams();
    const [articles, setArticles] = useState([]);
    const [profile, setProfile] = useState();
    const [user, setUser] = useState();

    const getFile = async () => {
        const [fileHandle] = await window.showOpenFilePicker({
            types: [
                {
                    description: "Images",
                    accept: {
                        "images/*": [".png", ".jpeg", ".jpg"],
                    },
                },
            ],
            excludeAcceptAllOption: true,
            multiple: false,
        });

        return await fileHandle.getFile();
    }

    const changeProfile = async () => {
        const file = await getFile();
        setProfile(URL.createObjectURL(file));

        const formData = new FormData();
        formData.append("profile", file);

        const api = import.meta.env.VITE_API_URL;
        const token = localStorage.getItem("token");
        const res = await fetch(`${api}/users/profile`, {
            method: "POST",
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        return res.ok;
    }

    useEffect(() => {
        (async () => {
            const api = import.meta.env.VITE_API_URL;
            const res = await fetch(`${api}/articles/profile/${id}`);
            const user_res = await fetch(`${api}/users/${id}`);
            const user_data = await user_res.json();

            setUser(user_data);
            setArticles(await res.json());

            const profileUrl = import.meta.env.VITE_PUBLIC_PROFILES;
            setProfile(`${profileUrl}/${user_data.profile}`);
        })();
    }, []);


    return <Box>
        <Box sx={{ mb: 5 }}>
            <Button onClick={() => {
                changeProfile();
            }}>
                <Avatar
                    src={profile}
                    sx={{ width: 128, height: 128 }}>
                    A
                </Avatar>
            </Button>
        </Box>
        <ShowArticles articles={articles} />
    </Box>
} 