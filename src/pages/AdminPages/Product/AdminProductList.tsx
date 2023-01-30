import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

import shoes from "../../../assets/JPG/shoes.jpg";

const AdminProductList = () => {
  return (
    <Card sx={{ height: 291, width: 257, padding: "0px 0px 16px 0px" }}>
      <Box sx={{ height: 207, width: 257, overflow: "hidden", mx: "auto" }}>
        <CardMedia
          image={shoes}
          sx={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </Box>
      <CardContent>
        <Stack gap="4px">
          <Typography variant="body1" fontWeight={500}>
            Product Description
          </Typography>
          <Typography variant="body1" fontWeight={500}>
            $240.00
          </Typography>
        </Stack>
        <Box sx={{ textAlign: "right", mt: "-13px" }}>
          <BorderColorIcon
            sx={{ mr: "20px", color: (theme) => theme.palette.primary.main }}
          />
          <DeleteIcon sx={{ color: (theme) => theme.palette.error.dark }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default AdminProductList;
