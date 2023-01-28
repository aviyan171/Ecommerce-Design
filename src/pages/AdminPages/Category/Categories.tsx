import {
  Box,
  Button,
  Divider,
  Drawer,
  Paper,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import { drawerWidth } from "../../../utils/commonVariable";
import shoes from "../../../assets/JPG/shoes.jpg";
import { useState } from "react";
import CategoryDetail from "./CategoryDetail";

const Categories = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDraweer = (toggle: boolean) => {
    setOpenDrawer(toggle);
  };

  return (
    <Box sx={{ padding: "32px 32px 32px", ml: `${drawerWidth}px` }}>
      <Toolbar />
      <Box textAlign="right">
        <Button startIcon={<AddIcon />} variant="contained">
          Add Catagory
        </Button>
      </Box>
      <Box mt="32px">
        <Paper sx={{ height: "350px", padding: "16px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex" }}>
              <Box flex={0.5}></Box>
              <Box flex={5} sx={{ padding: "16px" }}>
                <Typography fontWeight={500}>Catagory</Typography>
              </Box>
              <Box flex={5} sx={{ padding: "16px" }}>
                <Typography fontWeight={500}>Sub-Catagory</Typography>
              </Box>
              <Box flex={0.8}></Box>
            </Box>
            <Divider />

            <Box sx={{ cursor: "pointer" }} onClick={() => toggleDraweer(true)}>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    flex: 0.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  1
                </Box>

                <Box
                  sx={{
                    flex: 5,
                    display: "flex",
                    gap: 2,
                    padding: "8px",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ height: "61px", width: "75px" }}>
                    <Box
                      component="img"
                      alt="img"
                      src={shoes}
                      sx={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </Box>
                  <Typography>Women's Fashion</Typography>
                </Box>
                <Box flex={5} sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>2</Typography>
                </Box>
                <Box
                  flex={0.8}
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <BorderColorIcon sx={{ color: "#848484" }} />
                  <DeleteIcon
                    sx={{ color: (theme) => theme.palette.error.main }}
                  />
                </Box>
              </Box>
              <Divider />
            </Box>

            <Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    flex: 0.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  2
                </Box>
                <Box
                  sx={{
                    flex: 5,
                    display: "flex",
                    gap: 2,
                    padding: "8px",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ height: "61px", width: "75px" }}>
                    <Box
                      component="img"
                      alt="img"
                      src={shoes}
                      sx={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </Box>
                  <Typography>Accessories</Typography>
                </Box>
                <Box flex={5} sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>2</Typography>
                </Box>
                <Box
                  flex={0.8}
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <BorderColorIcon sx={{ color: "#848484" }} />
                  <DeleteIcon
                    sx={{ color: (theme) => theme.palette.error.main }}
                  />
                </Box>
              </Box>
              <Divider />
            </Box>
          </Box>
        </Paper>
      </Box>

      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDraweer(false)}
        onOpen={() => toggleDraweer(true)}
      >
        <Box sx={{ width: "910px", padding: "32px 30px 32px 32px " }}>
          <CategoryDetail toggleDraweer={toggleDraweer} />
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default Categories;
