import { Add as AddIcon } from "@mui/icons-material";
import { TextField, Button, Input, IconButton, Alert } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddComment() {
  const { origin } = useParams();
  const contentRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const content = contentRef.current.value;

    if (!content) {
      setError("Content required!");
      return false;
    }

    const api = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");

    const res = await fetch(`${api}/articles/${origin}/comments`, {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    navigate(-1);
  };

  return (
    <>
      {error && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Input
          multiline
          inputRef={contentRef}
          fullWidth
          placeholder="Comment"
          endAdornment={
            <IconButton type="submit" sx={{ ml: 2 }}>
              <AddIcon />
            </IconButton>
          }
        />
      </form>
    </>
  );
}

export default AddComment;
