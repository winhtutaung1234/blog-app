import { Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react"

export default function Home() {
    const [articles, setArticles] = useState([]);

    (async () => {
        const api = import.meta.env.VITE_API_URL;
        const res = await fetch(`${api}/articles`);
        setArticles(await res.json());
    })();

    return <Box>
        {articles.map(article => (
            <Card 
                sx={{ mb: 3 }}
                key={article._id}>
                <CardContent>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                    }}>
                        <Typography sx={{ fontSize: 15 }}>{ article.owner.name }</Typography>
                        <Typography sx={{ fontSize: 12 }}>{ article.created }</Typography>
                    </Box>
                    <Typography sx={{ mb: 2, fontSize: 18 }}>{ article.title }</Typography>
                    <Typography sx={{ ml: 2, fontSize: 15 }}>{ article.body }</Typography>
                </CardContent>
            </Card>
        ))}
    </Box>
}