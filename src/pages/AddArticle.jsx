import { Alert, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddArticle() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    const api = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");

    const res = await fetch(`${api}/articles`, {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      setError((await res.json()).msg);
      return false;
    }

    navigate("/");
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
        <TextField fullWidth inputRef={titleRef} sx={{ mb: 2 }} label="Title" />

        <TextField
          fullWidth
          inputRef={bodyRef}
          sx={{ mb: 2 }}
          label="Body"
          multiline
        />
        <Button variant="contained" type="submit" fullWidth>
          + Add Article
        </Button>
      </form>
    </>
  );
}

export default AddArticle;
