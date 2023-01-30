import {
  Box,
  Button,
  Divider,
  Drawer,
  Modal,
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
import AddCategory from "./AddCategory";

const Categories = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDraweer = (toggle: boolean) => {
    setOpenDrawer(toggle);
  };

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
    <Box sx={{ padding: "32px 32px 32px", ml: `${drawerWidth}px` }}>
      <Toolbar />
      <Box textAlign="right">
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={handleOpenModal}
        >
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

      <Box>
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableScrollLock={true}
          sx={{
            "& .MuiBox-root": {
              padding: "0px 0px 0px 0px",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 700,
              height: 446,
              bgcolor: "background.paper",
              padding: "none",

              p: 4,
            }}
          >
            <AddCategory />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Categories;
