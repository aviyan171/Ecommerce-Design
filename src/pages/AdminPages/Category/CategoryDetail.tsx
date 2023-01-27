import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CategoryDetail = () => {
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

        <CloseIcon sx={{ textAlign: "right" }} />
      </Box>
    </Box>
  );
};

export default CategoryDetail;
