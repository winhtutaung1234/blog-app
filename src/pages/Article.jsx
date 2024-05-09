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

function Article() {
  const { id } = useParams();
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

  console.log(article);
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
          <IconButton
            onClick={async () => {
              const api = import.meta.env.VITE_API_URL;
              const res = await fetch(`${api}/like/${article._id}`, {
                method: "PUT",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
            }}
          >
            <LikeIcon sx={{ fontSize: 20 }} />
          </IconButton>
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
