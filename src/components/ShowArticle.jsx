import { Comment, Favorite, ReadMore as ReadIcon } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

import { useNavigate } from "react-router-dom";

function ShowArticle({ article }) {
  const navigte = useNavigate();

  const image_url = import.meta.env.VITE_IMG_URL;
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>{article.owner.name[0]}</Avatar>
        }
        title={article.owner.name}
      />
      <CardMedia
        height="254"
        sx={{ borderRadius: 1 }}
        image={`${image_url}/${article.image}`}
        component="img"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }}>{article.title}</Typography>
        <Typography sx={{ fontSize: 12, ml: 2, mt: 1 }}>
          {article.body}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-around", my: 1 }}>
        <Button
          variant="text"
          size="small"
          sx={{ textTransform: "lowercase" }}
          onClick={() => {
            navigte(`/articles/${article._id}/likes`);
          }}
        >
          {`${article.likes && article.likes.length} likes`}
        </Button>

        <Button
          variant="text"
          size="small"
          sx={{ textTransform: "lowercase" }}
          onClick={() => {
            navigte(`/article/${article._id}/comments`);
          }}
        >
          {`${article.comments && article.comments.length} comments`}
        </Button>

        <IconButton
          onClick={() => {
            navigte(`/articles/${article._id}`);
          }}
        >
          <ReadIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

export default ShowArticle;
