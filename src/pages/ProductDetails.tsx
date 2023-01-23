import {
  Avatar,
  Box,
  Divider,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import shoes from "../assets/JPG/shoes.jpg";
import Container from "@mui/material/Container";
import Ratings from "../common/Ratings";
import CustomerReviews from "../common/CustomerReviews";
import { prodLists } from "./arrayProdList";
import ProductCard from "../common/ProductCard";
import { Items } from "./interface";

const ProductDetails = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 5, mx: "auto" }}>
      <Box sx={{ display: "flex", gap: 10 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box>
              <Box
                component="img"
                src={shoes}
                alt="img"
                sx={{
                  height: 605,
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <KeyboardArrowUpIcon sx={{ color: "#575656", fontSize: 40 }} />

              <Box
                component="img"
                src={shoes}
                alt="img"
                sx={{
                  height: 158.98,
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <Box
                component="img"
                src={shoes}
                alt="img"
                sx={{
                  height: 150,
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <Box
                component="img"
                src={shoes}
                alt="img"
                sx={{
                  height: 150,
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <KeyboardArrowDownIcon sx={{ color: "#575656", fontSize: 40 }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3.6 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 28,
              }}
            >
              Shoes
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Ratings />
              <Typography sx={{ fontSize: 12, mt: 0.5, ml: 1 }}>
                (40 reviews)
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: 28,
                color: "#3f51b5",
                fontWeight: 600,
              }}
            >
              $250.00
            </Typography>
            <Typography fontWeight={500}>Colors</Typography>

            <Box sx={{ display: "flex", gap: 2.3 }}>
              <Avatar
                sx={{
                  bgcolor: ({
                    palette: {
                      error: { light },
                    },
                  }) => light,
                  height: 48,
                  width: 48,
                }}
              >
                {""}
              </Avatar>
              <Avatar
                sx={{
                  bgcolor: ({
                    palette: {
                      success: { light },
                    },
                  }) => light,
                  height: 48,
                  width: 48,
                }}
              >
                {" "}
              </Avatar>
              <Avatar
                sx={{
                  bgcolor: ({
                    palette: {
                      warning: { light },
                    },
                  }) => light,
                  height: 48,
                  width: 48,
                }}
              >
                {" "}
              </Avatar>
              <Avatar
                sx={{
                  bgcolor: ({
                    palette: {
                      primary: { light },
                    },
                  }) => light,
                  height: 48,
                  width: 48,
                }}
              >
                {""}
              </Avatar>
            </Box>
            <Typography
              sx={{
                fontWeight: 500,
              }}
            >
              Size
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  height: 30,
                  width: 35,
                  border: "0.5px solid grey ",
                }}
              >
                <Typography sx={{ pl: 1 }}>35</Typography>
              </Box>
              <Box
                sx={{
                  height: 30,
                  width: 35,
                  border: "0.5px solid grey ",
                  bgcolor: "#3f51b5",
                  color: "white",
                }}
              >
                <Typography sx={{ pl: 1 }}>36</Typography>
              </Box>
              <Box
                sx={{
                  height: 30,
                  width: 35,
                  border: "0.5px solid grey ",
                }}
              >
                <Typography sx={{ pl: 1 }}>37</Typography>
              </Box>
              <Box
                sx={{
                  height: 30,
                  width: 35,
                  border: "0.5px solid grey ",
                }}
              >
                <Typography sx={{ pl: 1 }}>38</Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontWeight: 500,
              }}
            >
              Quantity
            </Typography>
            <Box
              sx={{
                height: 35,
                width: 95,
                border: "0.5px solid grey",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ pl: 1 }}>1</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", pr: 1 }}>
                <ExpandLessIcon sx={{ fontSize: 20 }} />
                <ExpandMoreIcon sx={{ fontSize: 20 }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Box
                sx={{
                  border: "1px solid",
                  height: 40,
                  width: 250,
                  display: "flex",
                  color: "white",
                  bgcolor: "#D67621",
                }}
              >
                <Typography
                  sx={{
                    ml: "30%",
                    mt: 0.7,
                  }}
                >
                  Buy Now
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "1px solid",
                  height: 40,
                  width: 250,
                  display: "flex",
                  color: "white",
                  bgcolor: "#3f51b5",
                }}
              >
                <Typography
                  sx={{
                    ml: "30%",
                    mt: 0.7,
                  }}
                >
                  Add to Cart
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Paper
        elevation={0}
        sx={{ height: 178, mt: 3, display: "flex", gap: 50 }}
      >
        <Box sx={{ padding: "16px 32px" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Product Description
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 20, mt: 4 }}>
            <Box>
              <Typography>
                <Typography component="span">
                  <CheckCircleOutlineIcon
                    sx={{ height: 13, width: 13, mr: 1 }}
                  />
                </Typography>
                Standard Fit
              </Typography>
              <Typography>
                <Typography component="span">
                  <CheckCircleOutlineIcon
                    sx={{ height: 13, width: 13, mr: 1 }}
                  />
                </Typography>
                Lace-up closure
              </Typography>
              <Typography>
                <Typography component="span">
                  <CheckCircleOutlineIcon
                    sx={{ height: 13, width: 13, mr: 1 }}
                  />
                </Typography>
                Rubber outside
              </Typography>
            </Box>

            <Box>
              <Typography>
                <Typography component="span">
                  <CheckCircleOutlineIcon
                    sx={{ height: 13, width: 13, mr: 1 }}
                  />
                </Typography>
                Standard Fit
              </Typography>
              <Typography>
                <Typography component="span">
                  <CheckCircleOutlineIcon
                    sx={{ height: 13, width: 13, mr: 1 }}
                  />
                </Typography>
                Lace-up closure
              </Typography>
              <Typography>
                <Typography component="span">
                  <CheckCircleOutlineIcon
                    sx={{ height: 13, width: 13, mr: 1 }}
                  />
                </Typography>
                Rubber outside
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ padding: "16px 32px" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Product Specification
          </Typography>
          <Box sx={{ display: "flex", gap: 5, mt: 4 }}>
            <Box>
              <Typography>Brand</Typography>
              <Typography>Nike</Typography>
            </Box>
            <Box>
              <Typography>SKU</Typography>
              <Typography>116778449_NP-1031962218a</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Paper sx={{ height: 800, mt: 4 }}>
        <Box sx={{ pl: "32px", pt: "16px" }}>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
              Ratings & Reviews
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", mb: 5, gap: 20 }}>
              <Stack gap={1} sx={{ mt: 5 }}>
                <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                  5/5
                </Typography>
                <Ratings />

                <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                  4 Ratings
                </Typography>
              </Stack>

              <Stack sx={{ width: "100%", mt: 2, gap: 1.5 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Ratings />
                  <LinearProgress
                    value={85}
                    variant="determinate"
                    color="warning"
                    sx={{
                      height: 20,
                      width: 260,
                    }}
                  />

                  <Typography>5</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Ratings />

                  <LinearProgress
                    value={75}
                    variant="determinate"
                    color="warning"
                    sx={{
                      height: 20,
                      width: 260,
                    }}
                  />

                  <Typography>4</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Ratings />

                  <LinearProgress
                    value={65}
                    variant="determinate"
                    color="warning"
                    sx={{
                      height: 20,
                      width: 260,
                    }}
                  />

                  <Typography>3</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Ratings />

                  <LinearProgress
                    value={50}
                    variant="determinate"
                    color="warning"
                    sx={{
                      height: 20,
                      width: 260,
                    }}
                  />

                  <Typography>2</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Ratings />

                  <LinearProgress
                    value={0}
                    variant="determinate"
                    color="warning"
                    sx={{
                      height: 20,
                      width: 260,
                    }}
                  />

                  <Typography>0</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
          <Divider />

          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 20, pt: 5 }}>
              Product Reviews
            </Typography>

            <Box>
              <Box sx={{ width: "698px" }}>
                <CustomerReviews />
                <Divider />
                <CustomerReviews />
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Box sx={{ pt: 3 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 24 }}>
          Related Products
        </Typography>
        <Box sx={{ display: "flex", gap: { md: 5, xl: 8 }, mt: 3, mb: 10 }}>
          {prodLists.map((item: Items) => {
            return <ProductCard item={item} />;
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
