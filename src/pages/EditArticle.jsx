import { Alert, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditArticle() {
  const [article, setArticle] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const api = import.meta.env.VITE_API_URL;
      const res = await fetch(`${api}/articles/${id}`);
      const data = await res.json();
      setArticle(data);
      setTitle(data.title);
      setBody(data.body);
      setImage(data.image);

      setIsLoading(false);
    })();
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleSubmit = async () => {
    const api = import.meta.env.VITE_API_URL;

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("body", body);

    const res = await fetch(`${api}/articles/${article._id}`, {
      method: "PUT",
      body: formData,
    });

    if (!res.ok) {
      setError((await res.json()).msg);
      return false;
    }

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
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          fullWidth
          type="file"
          sx={{ mb: 2 }}
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <TextField
          fullWidth
          label="Title"
          sx={{ mb: 2 }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          fullWidth
          multiline
          label="Body"
          sx={{ mb: 2 }}
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <Button type="submit" fullWidth variant="contained">
          Edit Article
        </Button>
      </form>
    </>
  );
}

export default EditArticle;
