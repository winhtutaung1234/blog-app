import { Alert, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;

    const api = import.meta.env.VITE_API_URL;
    const res = await fetch(`${api}/users`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      setError("something wrong. please try again");
      return false;
    }

    navigate("/login");
  };

  return (
    <>
      {error && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField label="Name" fullWidth inputRef={nameRef} sx={{ mb: 2 }} />

        <TextField
          label="Email"
          type="email"
          fullWidth
          inputRef={emailRef}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          inputRef={passRef}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit" fullWidth>
          Register
        </Button>
      </form>
    </>
  );
}

export default Register;
