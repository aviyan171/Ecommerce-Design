import { Box, Divider, Modal, Typography, Stack } from "@mui/material";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import shoe from "../assets/JPG/shoes.jpg";
import Button from "@mui/material/Button";

const AddToCartConfirm = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 668,
            height: 299,
            bgcolor: "#FFFFFF",
            boxShadow: "rgba(35, 38, 59, 0.25)",
          }}
        >
          <Box>
            <Box
              sx={{
                padding: "16px 27px 16px 24px ",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography variant="body1" fontWeight={500}>
                  Added to your cart
                </Typography>
                <DoneIcon
                  sx={{ color: (theme) => theme.palette.success.light }}
                />
              </Box>
              <CloseIcon />
            </Box>
            <Divider />
          </Box>
          <Box sx={{ padding: "32px 122px 32px 32px" }}>
            <Box sx={{ display: "flex", gap: 4 }}>
              <Box sx={{ height: 178, width: 233, overflow: "hidden" }}>
                <Box
                  component="img"
                  alt="shoe"
                  src={shoe}
                  sx={{ height: "100%", width: "100%" }}
                />
              </Box>
              <Stack gap={0.5}>
                <Typography fontSize={9}>XULA</Typography>
                <Typography variant="h6" fontWeight={600}>
                  Nike Air Force 1 '07 LX
                </Typography>
                <Typography fontWeight={500}>Size:36</Typography>
                <Typography fontWeight={500}>Price:$280.00</Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ height: "56px", fontWeight: 400 }}
                >
                  View Cart
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddToCartConfirm;
