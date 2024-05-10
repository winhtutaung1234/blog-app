import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Comment,
  FavoriteBorder as LikeIcon,
  Favorite as LikedIcon,
} from "@mui/icons-material";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";

import { useAuthUser } from "../providers/AuthUserProvider";
import LikeButton from "../components/LikeButton";

function Article() {
  const { id } = useParams();
  const { authUser } = useAuthUser();

  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState();

  useEffect(() => {
    (async () => {
      const api = import.meta.env.VITE_API_URL;
      const res = await fetch(`${api}/articles/${id}`);
      setArticle(await res.json());
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  const like = async () => {
    const api = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");

    const res = await fetch(`${api}/articles/like/${article._id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.log((await res.json()).msg);
    }

    setArticle((article) => ({
      ...article,
      likes: [authUser._id, ...article.likes],
    }));
  };

  const unlike = async () => {
    const api = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");

    const res = await fetch(`${api}/articles/unlike/${article._id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setArticle((article) => ({
      ...article,
      likes: [...article.likes.filter((like) => like !== authUser._id)],
    }));
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 17 }}>{article.title}</Typography>
        <Typography sx={{ fontSize: 16, ml: 2, mt: 1 }}>
          {article.body}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 1 }}>
        <ButtonGroup>
          <LikeButton article={article} like={like} unlike={unlike} />
          <Button variant="text" color="inherit">
            {article.likes ? article.likes.length : 0}
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <IconButton>
            <Comment sx={{ fontSize: 20 }} />
          </IconButton>
          <Button variant="text" color="inherit">
            {article.comments ? article.comments.length : 0}
          </Button>
        </ButtonGroup>
      </Box>
    </Card>
  );
}

export default Article;
