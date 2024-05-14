import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Comment, MoreVert as MenuIcon } from "@mui/icons-material";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import { useAuthUser } from "../providers/AuthUserProvider";
import LikeButton from "../components/LikeButton";
import { red } from "@mui/material/colors";
import ShowMenuList from "../components/ShowMenuList";
import { useUIState } from "../providers/UIStateProvider";

function Article() {
  const { id } = useParams();
  const { authUser } = useAuthUser();

  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState();

  const { menu, setMenu, menuPosition, setMenuPosition } = useUIState();

  const navigate = useNavigate();

  const image_url = import.meta.env.VITE_IMG_URL;

  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    (async () => {
      const res = await fetch(`${api}/articles/${id}`);
      const data = await res.json();
      setArticle(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  const like = async () => {
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

  const removeArticle = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${api}/articles/${article._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.log((await res.json()).msg);
      return;
    }
    navigate("/");
  };

  const goEditPage = () => {
    navigate(`/articles/edit/${article._id}`);
  };

  return (
    <Card sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", p: 2 }}>
        <Avatar sx={{ bgcolor: red[500] }}>{article.owner.name[0]}</Avatar>

        <Typography
          sx={{ flexGrow: 1, mt: 2, ml: 1, fontSize: 13, fontWeight: "bold" }}
        >
          {article.owner.name}
        </Typography>

        {authUser._id === article.owner._id && (
          <Box>
            <IconButton
              onClick={(e) => {
                setMenu(true);
                setMenuPosition(e.currentTarget);
              }}
            >
              <MenuIcon />
            </IconButton>

            <ShowMenuList
              menu={menu}
              setMenu={setMenu}
              menuPosition={menuPosition}
              removeArticle={removeArticle}
              goEditPage={goEditPage}
            />
          </Box>
        )}
      </Box>
      <CardMedia
        image={`${image_url}/${article.image}`}
        height="240"
        component="img"
      />
      <CardContent>
        <Typography sx={{ fontSize: 17 }}>{article.title}</Typography>
        <Typography sx={{ fontSize: 16, ml: 2, mt: 1 }}>
          {article.body}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 1 }}>
        <ButtonGroup>
          <LikeButton article={article} like={like} unlike={unlike} />
          <Button
            variant="text"
            color="inherit"
            onClick={() => {
              navigate(`/articles/${article._id}/likes`);
            }}
          >
            {article.likes ? article.likes.length : 0}
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <IconButton
            onClick={() => {
              navigate(`/articles/${article._id}/comments`);
            }}
          >
            <Comment sx={{ fontSize: 20 }} />
          </IconButton>
          <Button
            variant="text"
            color="inherit"
            onClick={() => {
              navigate(`/article/${article._id}/comments`);
            }}
          >
            {article.comments ? article.comments.length : 0}
          </Button>
        </ButtonGroup>
      </Box>
    </Card>
  );
}

export default Article;
