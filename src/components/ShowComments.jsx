import { Alert, Avatar, Box, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

import { Clear as RemoveIcon } from "@mui/icons-material";

function ShowComments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  const removeComment = (_id) => {
    setComments(comments.filter((comment) => comment._id !== _id));
  };

  useEffect(() => {
    (async () => {
      const api = import.meta.env.VITE_API_URL;
      const res = await fetch(`${api}/article/${id}/comments`);
      const data = await res.json();
      setComments(data);
    })();
  }, []);

  if (comments.length <= 0) {
    return <Typography sx={{ fontSize: 18 }}>No comments ....</Typography>;
  }

  return (
    <>
      {error && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      {comments.map((comment) => (
        <Box sx={{ mb: 3 }} key={comment._id}>
          <Box sx={{ display: "flex" }}>
            <IconButton>
              <Avatar sx={{ bgcolor: red[500] }}>
                {comment.owner.name[0]}
              </Avatar>
            </IconButton>
            <Typography sx={{ fontSize: 15, mt: 3, ml: 1, flexGrow: 1 }}>
              {comment.owner.name}
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontSize: 13, mt: 2, mx: 3 }}>
                {formatDistanceToNow(new Date(comment.created), {
                  addSuffix: true,
                })}
              </Typography>
              <IconButton
                onClick={async () => {
                  const api = import.meta.env.VITE_API_URL;
                  const token = localStorage.getItem("token");

                  const res = await fetch(
                    `${api}/articles/comments/${comment._id}`,
                    {
                      method: "DELETE",
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  );

                  if (!res.ok) {
                    setError((await res.json()).msg);
                    return false;
                  }

                  removeComment(comment._id);
                }}
              >
                <RemoveIcon sx={{ fontSize: 17 }} />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ pb: 3 }}>
            <Typography sx={{ mt: 2, ml: 8, fontSize: 18, fontWeight: "bold" }}>
              {comment.content}
            </Typography>
          </Box>

          <hr />
        </Box>
      ))}
    </>
  );
}

export default ShowComments;
