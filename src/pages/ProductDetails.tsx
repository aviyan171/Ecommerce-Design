import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import shoes from "../assets/JPG/shoes.jpg";

const ProductDetails = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Container>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                component="img"
                src={shoes}
                alt="img"
                sx={{ height: "500px", width: "450px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={shoes}
                  alt="img"
                  sx={{ height: 150, width: 150 }}
                />
                <Box
                  component="img"
                  src={shoes}
                  alt="img"
                  sx={{ height: 150, width: 150 }}
                />
                <Box
                  component="img"
                  src={shoes}
                  alt="img"
                  sx={{ height: 150, width: 150 }}
                />
              </Box>
            </Box>
            <Typography
              sx={{
                fontFamily: "Sofia Sans Semi Condensed",
                fontWeight: "bold",
                mt: 2,
              }}
            >
              Product Description
            </Typography>
            <Typography sx={{ fontFamily: "Sofia Sans Semi Condensed" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quisquam debitis accusantium dolore aliquid dignissimos
              voluptatibus, in esse quibusdam est et dolor, qui temporibus
              aperiam. Placeat culpa tempora totam repellendus.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{
                  fontFamily: "Sofia Sans Semi Condensed",
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Canvas shoes for girls
              </Typography>

              <Box sx={{ display: "flex" }}>
                {new Array(5).fill("").map((_, index) => {
                  return (
                    <Box key={index}>
                      <StarIcon
                        sx={{
                          color: ({
                            palette: {
                              warning: { dark },
                            },
                          }) => dark,
                        }}
                      />
                    </Box>
                  );
                })}
                <Typography sx={{ fontSize: 15, ml: 1 }}>
                  (40 reviews)
                </Typography>
              </Box>
              <Button variant="contained" sx={{ width: 250 }}>
                Give Review
              </Button>
              <Typography
                sx={{
                  fontFamily: "Sofia Sans Semi Condensed",
                  fontSize: 25,
                  color: "#3f51b5",
                  fontWeight: "bold",
                }}
                
              >
                $250.00
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Sofia Sans Semi Condensed",
                  fontWeight: "bold",
                }}
              >
                Colors
              </Typography>

              <Box sx={{ display: "flex", gap: 2.3 }}>
                <Avatar
                  sx={{
                    bgcolor: ({
                      palette: {
                        error: { light },
                      },
                    }) => light,
                  }}
                >
                  {" "}
                </Avatar>
                <Avatar
                  sx={{
                    bgcolor: ({
                      palette: {
                        success: { light },
                      },
                    }) => light,
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
                  }}
                >
                  {""}
                </Avatar>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Sofia Sans Semi Condensed",
                  fontWeight: "bold",
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
                  fontWeight: "bold",
                  fontFamily: "Sofia Sans Semi Condensed",
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
                    width: 230,
                    display: "flex",
                    color: "white",
                    bgcolor: "#3f51b5",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Sofia Sans Semi Condensed",
                      ml: "30%",
                      mt: 0.7,
                    }}
                  >
                    Add to Cart
                  </Typography>
                </Box>
                <Box sx={{ border: "0.5px solid grey", height: 40, width: 50 }}>
                  <FavoriteBorderIcon sx={{ ml: 1.5, mt: 1 }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider />

        <Box sx={{ height: 500, width: "maxWidth", mt: 2 }}>
          <Typography
            sx={{ fontFamily: "Shalimar", fontWeight: "bold", fontSize: 30 }}
          >
            Product Reviews
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", fontFamily: "Sofia Sans Semi Condensed" }}
          >
            Reviewed By: Abhiyan Upreti
          </Typography>
          {
            <Box sx={{ display: "flex" }}>
              {new Array(5).fill("").map((_, index) => {
                return (
                  <Box key={index}>
                    <StarIcon
                      sx={{
                        color: ({
                          palette: {
                            warning: { dark },
                          },
                        }) => dark,
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          }
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos
            perferendis quasi eveniet recusandae, architecto earum animi
            cupiditate rem maiores voluptas! Iste sapiente quisquam ullam sunt
            tempora delectus ut nostrum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt sed vitae at id illum sit, nostrum ea
            voluptas, est perspiciatis rerum minima in. Nulla debitis ducimus
            illo aspernatur et iure?
          </Typography>
          <Box sx={{ display: "flex", gap: 2, cursor: "pointer", mt: 1 }}>
            <DeleteIcon color="error" />
            <ModeEditIcon color="primary" />
          </Box>
          <Divider />
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetails;
