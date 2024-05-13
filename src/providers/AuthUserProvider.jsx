import { createContext, useContext, useEffect, useState } from "react";

const AuthUserContext = createContext();

export function useAuthUser() {
  return useContext(AuthUserContext);
}

function AuthUserProvider({ children }) {
  const [authUser, setAuthUser] = useState("");

  useEffect(() => {
    (async () => {
      const api = import.meta.env.VITE_API_URL;
      const token = localStorage.getItem("token");
      const res = await fetch(`${api}/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setAuthUser(await res.json());
      }
    })();
  }, [authUser]);

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
}

export default AuthUserProvider;
