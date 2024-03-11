import { useContext, useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

const useAuthContext = createContext();

export function useAuthUser() {
    return useContext(useAuthContext);
}

export default function AuthUser({ children }) {
    const [authUser, setAuthUser] = useState({});

    useEffect(() => {
        (async () => {
            const api = import.meta.env.VITE_API_URL;
            const token = localStorage.getItem("token");

            const res = await fetch(`${api}/verify`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!res.ok) {
                setAuthUser({});
            } else {
                const user = await res.json();
                setAuthUser(user);
            }
        })();

    }, []);

    return <useAuthContext.Provider value={{ authUser, setAuthUser }}>
        { children }
    </useAuthContext.Provider>
}