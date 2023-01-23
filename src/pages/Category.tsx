import { Box, Container, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider/Divider";
import Colors from "../common/Colors";
import CheckboxLabels from "../common/Labels";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { CustomTypography } from "../styles/CustomStyles";
import SortBy from "../common/SortBy";
import ProductCard from "../common/ProductCard";
import { prodLists } from "./arrayProdList";

const Category = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 5, mx: "auto" }}>
      <Box sx={{ display: "flex", gap: { xl: 15, md: 5 } }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 600, fontSize: 16 }}>
            Category
          </Typography>
          <Stack sx={{ mt: 5, gap: 1, mb: 2 }}>
            <CustomTypography>Women Dresses</CustomTypography>
            <CustomTypography>Party Wear</CustomTypography>
            <CustomTypography>Accessories</CustomTypography>
            <CustomTypography>Shoes</CustomTypography>
            <CustomTypography>Sweaters</CustomTypography>
            <CustomTypography>Jackets</CustomTypography>
          </Stack>
          <Divider />
          <Stack sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 16 }}>
              Price
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 2, mb: 3 }}>
              <Box
                sx={{
                  height: "40px",
                  width: "108px",
                  border: "1px solid #B3B3B3",
                  borderRadius: "4px",
                }}
              >
                <Typography sx={{ padding: " 8px", color: "#B3B3B3" }}>
                  Min
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "1px solid #B3B3B3",
                  width: 10.5,
                  height: 0,
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  height: "40px",
                  width: "108px",
                  border: "1px solid #B3B3B3",
                  borderRadius: "4px",
                }}
              >
                <Typography sx={{ padding: " 8px", color: "#B3B3B3" }}>
                  Max
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Divider />
          <Stack sx={{ mt: 2, mb: 4 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 16 }}>Size</Typography>
            <Box>
              <CheckboxLabels />
            </Box>
          </Stack>
          <Divider />
          <Stack sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 16 }}>
              Colors
            </Typography>
            <Box mt={2}>
              <Colors />
            </Box>
          </Stack>
        </Box>

        <Box sx={{ flex: 2 }}>
          <Box
            sx={{
              display: "flex",

              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: 500, color: "#2A3969" }}>
              Home
              <Typography component="span">
                <ArrowForwardIosIcon sx={{ fontSize: 10, ml: 1 }} /> Women's
                Fashion
              </Typography>
            </Typography>
            <SortBy />
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              gap: { xl: 2.8, md: 4.1 },
            }}
          >
            {prodLists.map((item) => {
              return <ProductCard item={item} />;
            })}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Category;
