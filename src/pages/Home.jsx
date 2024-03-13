import { useEffect, useState } from "react";
import ShowArticles from "../components/ShowArticles";

export default function Home() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            const api = import.meta.env.VITE_API_URL;
            const res = await fetch(`${api}/articles`);
            setArticles(await res.json());
        })();
    }, []);

    return <ShowArticles articles={articles} />
}