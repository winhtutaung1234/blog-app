import {
    Box,
    Typography,
    Card,
    CardContent, IconButton, Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    CardMedia,
    CardActionArea,
    ButtonGroup,
    Button
} from "@mui/material";

import { useState } from "react";

import { formatDistanceToNow } from "date-fns";
import {
    MoreVert,
    Delete as DeleteIcon, Comment as CommentIcon
} from "@mui/icons-material";
import { blue, green } from "@mui/material/colors";
import LikeButton from "../pages/LikeButton";
import { useNavigate } from "react-router-dom";

export default function ShowArticles({ articles, like, unlike }) {
    const [showMenu, setShowMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState(null);

    const imageUrl = import.meta.env.VITE_PUBLIC_IMAGES;
    const navigate = useNavigate();

    return <Box>
        {articles.map(article => (            
            <Card
                sx={{ mb: 3, maxWidth: "100%" }}
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
                                src={`${import.meta.env.VITE_PUBLIC_PROFILES}/${article.owner.profile}`}
                                sx={{
                                    width: 64,
                                    height: 64,
                                    background: blue[500],
                                }}>
                                {article.owner.name[0]}
                            </Avatar>
                            <Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                    }}>
                                    <Typography>{article.owner.name}</Typography>
                                    <Typography
                                        sx={{
                                            color: green[500],
                                            fontSize: 14,
                                        }}>
                                        • {
                                            formatDistanceToNow(new Date(article.created), { addSuffix: true })
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

                    { article.image && 
                        <Box sx={{ my: 3 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    sx={{ width: "100%", borderRadius: 2 }}
                                    image={`${imageUrl}/${article.image}`}
                                />
                            </CardActionArea>
                        </Box>
                    }

                    <Box sx={{
                        mt: 3,
                    }}>
                        <Typography sx={{ fontSize: 17, mb: 2 }}>{article.title}</Typography>
                        <Typography sx={{ fontSize: 15, ml: 3 }}>{article.body}</Typography>
                    </Box>

                    <Box sx={{ 
                        mt: 2,
                        display: "flex",
                        justifyContent: "space-around",
                     }}>
                        <ButtonGroup>
                            <LikeButton article={article} like={like} unlike={unlike} />

                            <Button
                                variant="text">
                                { article.likes ?
                                    article.likes.length : 0
                                }
                            </Button>
                        </ButtonGroup>

                        <IconButton onClick={() => {
                            navigate("/comments");
                        }}>
                            <CommentIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        ))}
    </Box>
}