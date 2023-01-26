import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { DrawerContent } from "./DrawerContent";
import { drawerWidth } from "../../utils/commonVariable";

const Drawers = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const getCurrentPage = () => {
    const path = location.pathname.replace("/", "");
    const routeName = path.charAt(0).toUpperCase() + path.slice(1);
    return location.pathname === "/" ? "Dashboard" : routeName;
  };

  const currentPage = getCurrentPage();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: `${drawerWidth}px`,
          height: 70,
          bgcolor: (theme) => theme.palette.common.white,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            padding: "20px 32px ",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: (theme) => theme.palette.common.black }} />
          </IconButton>
          <Typography noWrap variant="h6" color="primary" fontWeight={600}>
            {currentPage}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar
              sx={{ bgcolor: "#116A9F", height: "32px", width: "32px" }}
            />
            <Typography
              sx={{ color: (theme) => theme.palette.common.black, mt: 0.5 }}
            >
              Super Admin
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DrawerContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerContent />
        </Drawer>
      </Box>
    </Box>
  );
};

export default Drawers;
