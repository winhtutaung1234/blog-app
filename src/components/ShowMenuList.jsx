import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

function ShowMenuList({
  menu,
  setMenu,
  menuPosition,
  removeArticle,
  goEditPage,
}) {
  return (
    <Menu
      open={menu}
      anchorEl={menuPosition}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      onClose={() => {
        setMenu(false);
      }}
    >
      <MenuItem
        onClick={() => {
          removeArticle();
          setMenu(false);
        }}
      >
        <ListItemIcon>
          <DeleteIcon sx={{ fontSize: 20 }} color="error" />
        </ListItemIcon>
        <ListItemText primary="Delete" />
      </MenuItem>
      <MenuItem
        onClick={() => {
          goEditPage();
          setMenu(false);
        }}
      >
        <ListItemIcon>
          <EditIcon sx={{ fontSize: 20 }} color="success" />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </MenuItem>
    </Menu>
  );
}

export default ShowMenuList;
