import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import { blue } from "@mui/material/colors";

function ShowLikes() {
  const { id } = useParams();
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const api = import.meta.env.VITE_API_URL;
      const res = await fetch(`${api}/articles/${id}/likes`);
      const data = await res.json();
      const liked_users = data.liked_users;
      setLikedUsers(liked_users);
    })();
  }, []);

  if (likedUsers.length <= 0) {
    return <Typography sx={{ fontSize: 18 }}>No likes ...</Typography>;
  }

  return (
    <>
      <List>
        {likedUsers.map((user) => (
          <ListItem sx={{ mb: 3 }} key={user._id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[900] }}>{user.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} sx={{ flexGrow: 1 }} />
            <Button
              variant="contained"
              sx={{ borderRadius: 20, mt: 1, textTransform: "none" }}
              color="error"
              size="small"
            >
              Suspend
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ShowLikes;
