import {
  Box,
  Button,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import shoes from "../../../assets/JPG/shoes.jpg";
import { useState } from "react";
import { AddSubCategory } from "./Add-SubCategory";

interface ICategroyDetail {
  toggleDraweer: (toggle: boolean) => void;
}

const CategoryDetail = ({ toggleDraweer }: ICategroyDetail) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Catagory Detail
        </Typography>

        <CloseIcon
          sx={{ textAlign: "right" }}
          onClick={() => toggleDraweer(false)}
        />
      </Box>
      <Box mt="34px">
        <TextField
          fullWidth
          placeholder="Women's Fashion"
          label="Catagory Name*"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Box mt="40px">
        <Stack gap={0.5}>
          <Typography variant="body2" fontWeight={300}>
            Catagory Image
          </Typography>
          <Box
            sx={{
              width: "80px",
              height: "61px",
            }}
          >
            <Box
              component="img"
              src={shoes}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Stack>
      </Box>

      <Box mt="37px">
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography variant="h6" fontWeight={600}>
            Sub Catagories
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenModal}
          >
            Add Sub-Catagory
          </Button>
        </Stack>
      </Box>

      <Box mt="32px">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex" }}>
            <Box flex={0.4}></Box>
            <Box flex={4} padding="16px">
              <Typography variant="body1" fontWeight={500}>
                Name
              </Typography>
            </Box>
            <Box flex={0.8}></Box>
          </Box>
          <Divider />

          <Box>
            <Box display="flex">
              <Box
                sx={{
                  flex: 0.4,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                1
              </Box>
              <Box sx={{ flex: 4 }}>
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
              </Box>

              <Box
                sx={{
                  flex: 0.4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DeleteIcon
                  sx={{ color: (theme) => theme.palette.error.main }}
                />
              </Box>
            </Box>
            <Divider />
          </Box>

          <Box>
            <Box display="flex">
              <Box
                sx={{
                  flex: 0.4,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                1
              </Box>
              <Box sx={{ flex: 4 }}>
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
              </Box>

              <Box
                sx={{
                  flex: 0.4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DeleteIcon
                  sx={{ color: (theme) => theme.palette.error.main }}
                />
              </Box>
            </Box>
            <Divider />
          </Box>
        </Box>
      </Box>

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
            height: 542,
            bgcolor: "background.paper",
            padding: "none",

            p: 4,
          }}
        >
          <AddSubCategory />
        </Box>
      </Modal>
    </Box>
  );
};

export default CategoryDetail;
