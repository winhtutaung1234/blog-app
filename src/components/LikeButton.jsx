import {
  FavoriteBorder as LikeIcon,
  Favorite as LikedIcon,
} from "@mui/icons-material";

import { IconButton } from "@mui/material";

import { useAuthUser } from "../providers/AuthUserProvider";

function LikeButton({ article, like, unlike }) {
  const { authUser } = useAuthUser();
  return (
    <>
      {article.likes.includes(authUser._id) ? (
        <IconButton
          onClick={() => {
            unlike();
          }}
        >
          <LikedIcon sx={{ fontSize: 20 }} />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            like();
          }}
        >
          <LikeIcon sx={{ fontSize: 20 }} />
        </IconButton>
      )}
    </>
  );
}

export default LikeButton;
