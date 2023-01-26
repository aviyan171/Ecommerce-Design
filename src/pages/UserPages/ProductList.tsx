import { Box, Typography } from "@mui/material";
import Banner from "../assets/PNG/Banner.png";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import Products from "./Products";
import Cards from "./Cards";
import Footer from "./Footer";

const ProductList = () => {
  return (
    <Box>
      <Box
        sx={{
          ml: { md: 8, xl: 10 },
          mr: { md: 8, xl: 10 },
          mt: 3,
          position: "relative",
        }}
      >
        <Box component="img" src={Banner} alt="Banner" sx={{ width: "100%" }} />
        <Box sx={{ display: "flex", mt: 2, mb: 2 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
              color: "black",
              ml: 1.5,
            }}
          >
            Trending Now
          </Typography>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              display: "flex",
              mb: 2,
              mr: 4,
            }}
          >
            <Typography sx={{ fontSize: 14 }}>View All</Typography>
            <ArrowForwardIosSharpIcon sx={{ fontSize: 13, mt: 0.5 }} />
          </Box>
        </Box>

        <Products />

        <Box sx={{ display: "flex", mt: 5, mb: 2 }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 24,
              color: "black",
            }}
          >
            Top Electronic Brands
          </Typography>
        </Box>
        <Cards />
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductList;
