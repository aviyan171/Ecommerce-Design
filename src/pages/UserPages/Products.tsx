import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { MobileLists, prodLists } from "./arrayProdList";

const Products = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { md: 1.8, xl: 8 },
        flexWrap: "wrap",
      }}
    >
      {prodLists.map((item) => {
        return (
          <Card
            sx={{
              width: { md: 185, xl: 231 },
              height: { md: 270, xl: 280 },
              "&:hover": { boxShadow: "8px 10px 8px lightgrey" },
              position: "relative",
            }}
          >
            <Box>
              <Box
                sx={{ height: 180, width: 180, overflow: "hidden", mx: "auto" }}
              >
                <CardMedia
                  image={item.image}
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  title="shoes"
                />
              </Box>
              <div className="white-icon">
                <Tooltip title="Add to favorites" placement="top">
                  <FavoriteIcon
                    sx={{
                      position: "absolute",
                      right: "0",
                      top: "0",
                      color: "red",
                    }}
                  />
                </Tooltip>
              </div>
              <CardContent>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 13,
                    lineHeight: "24px",
                  }}
                >
                  {item.desc}
                </Typography>
                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                  Rs.{item.price}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  {new Array(5).fill("").map((_, index) => {
                    return (
                      <Box key={index}>
                        <StarIcon
                          sx={{
                            color: ({ palette: { warning } }) => warning.main,
                            fontSize: 10,
                          }}
                        />
                      </Box>
                    );
                  })}
                  <Typography sx={{ fontSize: 9, mt: 0.7, ml: 0.5 }}>
                    ({item.totalRating})
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        );
      })}

      <Box sx={{ display: "flex", mt: 3, mb: 1 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 18,
            color: "black",
          }}
        >
          Deal of the Day
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

      <Box sx={{ display: "flex", gap: { md: 1.8, xl: 8 } }}>
        {MobileLists.map((item) => {
          return (
            <Card
              sx={{
                width: { md: 185, xl: 231 },
                height: { md: 270, xl: 296 },
                "&:hover": { boxShadow: "8px 10px 8px lightgrey" },
              }}
            >
              <Box>
                <Box
                  sx={{
                    height: 180,
                    width: 180,
                    overflow: "hidden",
                    mx: "auto",
                  }}
                >
                  <CardMedia
                    sx={{
                      cursor: "pointer",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    image={item.image}
                    title="shoes"
                  />
                </Box>
                <CardContent>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 13,
                      lineHeight: "24px",
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                    Rs.{item.price}
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    {new Array(5).fill("").map((_, index) => {
                      return (
                        <Box key={index}>
                          <StarIcon
                            sx={{
                              color: ({ palette: { warning } }) => warning.main,
                              fontSize: 10,
                            }}
                          />
                        </Box>
                      );
                    })}
                    <Typography sx={{ fontSize: 9, mt: 0.7, ml: 0.5 }}>
                      ({item.totalRating})
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          );
        })}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 18,
            color: "black",
          }}
        >
          Recommend for You
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

      <Box sx={{ display: "flex", gap: { md: 1.8, xl: 8 }, mb: 2 }}>
        {prodLists.map((item) => {
          return (
            <Card
              sx={{
                width: { md: 185, xl: 231 },
                height: { md: 270, xl: 296 },
                "&:hover": { boxShadow: "8px 10px 8px lightgrey" },
                position: "relative",
              }}
            >
              <Box>
                <Box
                  sx={{
                    height: 180,
                    width: 180,
                    overflow: "hidden",
                    mx: "auto",
                  }}
                >
                  <CardMedia
                    image={item.image}
                    sx={{
                      cursor: "pointer",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 13,
                      lineHeight: "24px",
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                    Rs.{item.price}
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    {new Array(5).fill("").map((_, index) => {
                      return (
                        <Box key={index}>
                          <StarIcon
                            sx={{
                              color: ({ palette: { warning } }) => warning.main,
                              fontSize: 10,
                            }}
                          />
                        </Box>
                      );
                    })}
                    <Typography sx={{ fontSize: 9, mt: 0.7, ml: 0.5 }}>
                      ({item.totalRating})
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          );
        })}
      </Box>
      {MobileLists.map((item) => {
        return (
          <Card
            sx={{
              width: { md: 185, xl: 231 },
              height: { md: 270, xl: 296 },
              "&:hover": { boxShadow: "8px 10px 8px lightgrey" },
            }}
          >
            <Box>
              <Box
                sx={{
                  height: 180,
                  width: 180,
                  overflow: "hidden",
                  mx: "auto",
                }}
              >
                <CardMedia
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  image={item.image}
                  title="shoes"
                />
              </Box>
              <CardContent>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 13,
                    lineHeight: "24px",
                  }}
                >
                  {item.desc}
                </Typography>
                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                  Rs.{item.price}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  {new Array(5).fill("").map((_, index) => {
                    return (
                      <Box key={index}>
                        <StarIcon
                          sx={{
                            color: ({ palette: { warning } }) => warning.main,
                            fontSize: 10,
                          }}
                        />
                      </Box>
                    );
                  })}
                  <Typography sx={{ fontSize: 9, mt: 0.7, ml: 0.5 }}>
                    ({item.totalRating})
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default Products;
