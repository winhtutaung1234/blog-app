import { useEffect, useState } from "react";
import ShowArticles from "../components/ShowArticles";
import { useAuthUser } from "../components/AuthUser";

export default function Home() {
    const [articles, setArticles] = useState([]);

    const { authUser } = useAuthUser();

    const like = _id => {
        const result = articles.map(article => {
            if(article._id === _id) {
                article.likes.push(authUser._id);
            }

            return article;
        });

        setArticles(result);
    }

    const unlike = _id => {
        const result = articles.map(article => {
            if(article._id === _id) {
                article.likes = article.likes.filter(like => like !== authUser._id);
            }

            return article;
        });

        setArticles(result);
    }

    useEffect(() => {
        (async () => {
            const api = import.meta.env.VITE_API_URL;
            const res = await fetch(`${api}/articles`);
            setArticles(await res.json());
        })();
    }, []);

    return <ShowArticles articles={articles} like={like} unlike={unlike} />
}