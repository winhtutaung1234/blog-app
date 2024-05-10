import { Alert, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useAuthUser } from "../providers/AuthUserProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setAuthUser } = useAuthUser();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const api = import.meta.env.VITE_API_URL;
    const res = await fetch(`${api}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      setError((await res.json()).msg);
    }

    const data = await res.json();
    const token = data.token;
    localStorage.setItem("token", token);

    const user_res = await fetch(`${api}/verify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!user_res.ok) {
      setError((await user_res.json()).msg);
    }

    setAuthUser(await user_res.json());
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
        <TextField
          label="Email"
          type="email"
          fullWidth
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit" fullWidth>
          Login
        </Button>
      </form>
    </>
  );
}

export default Login;
