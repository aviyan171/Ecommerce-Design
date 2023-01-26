import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Inventory2Icon from "@mui/icons-material/Inventory2";

export const DrawerContent = () => {
  const navigate = useNavigate();
  const listItems = [
    {
      list: "Dashboard",
      Icon: <DashboardIcon sx={{ fontSize: 24 }} />,
      onclick: () => navigate("/"),
    },
    {
      list: "Orders",
      Icon: <ShoppingCart sx={{ fontSize: 24 }} />,
      onclick: () => navigate("/order"),
    },
    {
      list: "Categories",
      Icon: <Inventory2Icon sx={{ fontSize: 24 }} />,
      onclick: () => navigate("/category"),
    },
    {
      list: "Products",
      Icon: <Inventory2Icon sx={{ fontSize: 24 }} />,
      onclick: () => navigate("/product"),
    },
  ];
  return (
    <Box sx={{ pl: "16px", pr: "14px" }}>
      <Box mt="17px">
        <Typography variant="h5" fontWeight={600} color="primary">
          NoveltyMart
        </Typography>
      </Box>

      <Box mt={"55px"}>
        <List disablePadding>
          {listItems.map((text, index) => (
            <ListItem key={index} disablePadding onClick={text.onclick}>
              <ListItemButton disableGutters>
                <ListItemIcon>{text.Icon}</ListItemIcon>
                <ListItemText primary={text.list} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
