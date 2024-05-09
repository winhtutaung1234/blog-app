import { Comment, Favorite, ReadMore as ReadIcon } from "@mui/icons-material";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ShowArticle({ article }) {
  const navigte = useNavigate();
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }}>{article.title}</Typography>
        <Typography sx={{ fontSize: 15, ml: 2, mt: 1 }}>
          {article.body}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-around", my: 1 }}>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Comment />
        </IconButton>
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
