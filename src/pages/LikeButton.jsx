import { useAuthUser } from "../components/AuthUser";

import { IconButton } from "@mui/material";


import {
    Favorite as LikedIcon, FavoriteBorder as LikeIcon
} from "@mui/icons-material";
export default function LikeButton({ article, like, unlike }) {
    const { authUser } = useAuthUser();
    const api = import.meta.env.VITE_API_URL;

    return <>
        {Object.keys(authUser).length !== 0 &&
            article.likes ?
            article.likes.find(like => like === authUser._id) ?
                <IconButton
                    onClick={async () => {

                        const token = localStorage.getItem("token");
                        const res = await fetch(`${api}/articles/unlike/${article._id}`, {
                            method: "PUT",
                            headers: {
                                'Authorization': `Bearer ${token}`,
                            }
                        });

                        unlike(article._id);
                    }}>
                    <LikedIcon />
                </IconButton>
                :
                <IconButton
                    onClick={async () => {

                        const token = localStorage.getItem("token");
                        const res = await fetch(`${api}/articles/like/${article._id}`, {
                            method: "PUT",
                            headers: {
                                'Authorization': `Bearer ${token}`,
                            }
                        });
                        
                        like(article._id);
                    }}>
                    <LikeIcon />
                </IconButton>
            :
            <IconButton>
                <LikeIcon />
            </IconButton>
        }
    </>
}