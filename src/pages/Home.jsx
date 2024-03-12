import {
    Box,
    Typography,
    Card,
    CardContent, IconButton, Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import { useEffect, useState } from "react";

import { formatDistanceToNow } from "date-fns";
import {
    MoreVert,
    Delete as DeleteIcon,
} from "@mui/icons-material";
import { blue, green } from "@mui/material/colors";

export default function Home() {
    const [articles, setArticles] = useState([]);

    const [showMenu, setShowMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState(null);


    useEffect(() => {
        (async () => {
            const api = import.meta.env.VITE_API_URL;
            const res = await fetch(`${api}/articles`);
            setArticles(await res.json());
        })();
    }, []);

    return <Box>
        {articles.map(article => (
            <Card 
                sx={{ mb: 3 }}
                key={article._id}>
                <CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}>
                            <Avatar
                                sx={{
                                    width: 64,
                                    height: 64,
                                    background: blue[500],
                                }}>
                                { article.owner.name[0] }
                            </Avatar>
                            <Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                    }}>
                                    <Typography>{ article.owner.name }</Typography>
                                    <Typography
                                        sx={{
                                            color: green[500],
                                            fontSize: 14,
                                        }}>
                                        • { 
                                        formatDistanceToNow(new Date(article.created), { addSuffix: true})
                                        }
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <IconButton
                                onClick={e => {
                                    setShowMenu(true);
                                    setMenuPosition(e.currentTarget);
                                }}>
                                <MoreVert />
                            </IconButton>
                            <Menu
                                anchorEl={menuPosition}
                                open={showMenu}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                onClose={() => {
                                    setShowMenu(false);
                                }}>
                                <MenuItem>
                                    <ListItemIcon>
                                        <DeleteIcon color="error" />
                                    </ListItemIcon>
                                    <ListItemText primary="Delete" />
                                </MenuItem>
                                <MenuItem>Helo
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>

                    <Box sx={{ 
                        mt: 3,
                    }}>
                        <Typography sx={{ fontSize: 17, mb: 2  }}>{article.title}</Typography>
                        <Typography sx={{ fontSize: 15, ml: 3 }}>{article.body}</Typography>
                    </Box>
                </CardContent>
            </Card>
        ))}
    </Box>
}