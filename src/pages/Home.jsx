import { useState } from "react";
import { useEffect } from "react";
import ShowArticle from "../components/ShowArticle";
import { Container } from "@mui/material";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const api = import.meta.env.VITE_API_URL;
      const res = await fetch(`${api}/articles`);
      setArticles(await res.json());
    })();
  }, []);
  return (
    <>
      <Container maxWidth="xs">
        {articles.map((article) => (
          <ShowArticle key={article._id} article={article} />
        ))}
      </Container>
    </>
  );
}

export default Home;
