import { Box, Container, Typography } from "@mui/material";
import Banner from "../assets/PNG/Banner.png";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import Products from "./Products";
import Cards from "./Cards";
import Footer from "./Footer";

const ProductList = () => {
  return (
    <Box>
      <Container sx={{ mt: 2, position: "relative" }}>
        <Box
          component="img"
          src={Banner}
          alt="Banner"
          sx={{ maxWidth: "100%" }}
        />
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              fontFamily: "Shalimar",
              fontWeight: "bold",
              fontSize: 30,
              color: "black",
            }}
          >
            Trending Now
          </Typography>
          <Box sx={{ position: "absolute", right: 0, display: "flex", mb: 2 }}>
            <Typography>View All</Typography>
            <ArrowForwardIosSharpIcon sx={{ fontSize: "22.5px" }} />
          </Box>
        </Box>
        <Products />

        <Box sx={{ display: "flex", mt: 5, mb: 2 }}>
          <Typography
            sx={{
              fontFamily: "Shalimar",
              fontWeight: "bold",
              fontSize: 30,
              color: "black",
            }}
          >
            Top Electronic Brands
          </Typography>
        </Box>
        <Cards />
      </Container>
      <Footer />
    </Box>
  );
};

export default ProductList;
