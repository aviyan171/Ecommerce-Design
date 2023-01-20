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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { MobileLists, prodLists } from "./arrayProdList";

const Products = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.8,
        flexWrap: "wrap",
      }}
    >
      {prodLists.map((item) => {
        return (
          <Card
            sx={{
              width: 180,
              height: 265,
              "&:hover": { boxShadow: "8px 10px 8px lightgrey" },
              position: "relative",
            }}
          >
            <Box>
              <CardMedia
                sx={{ height: 180, width: 180 }}
                image={item.image}
                title="shoes"
              />
              <div
                // ref={favoriteElement}
                // onClick={handleChangeColor}

                className="white-icon"
              >
                <Tooltip title="Add to favorites" placement="top">
                  <FavoriteIcon
                    sx={{
                      position: "absolute",
                      right: "0",
                      top: "0",
                      color: "red",
                    }}
                    // onClick={handleAddToFavorite}
                  />
                </Tooltip>
              </div>
              <CardContent>
                <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                  {item.desc}
                </Typography>
                <Typography sx={{ fontSize: 13 }}>Rs.{item.price}</Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <DeleteIcon sx={{ fontSize: 14 }} />
                  <EditIcon sx={{ fontSize: 14 }} />
                </Box>
              </CardContent>
            </Box>
          </Card>
        );
      })}

      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            fontFamily: "Shalimar",
            fontWeight: "bold",
            fontSize: 30,
            color: "black",
          }}
        >
          Deal of the Day
        </Typography>
        <Box sx={{ position: "absolute", right: 0, display: "flex" }}>
          <Typography>View All</Typography>
          <ArrowForwardIosSharpIcon sx={{ fontSize: "22.5px" }} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 1.8 }}>
        {MobileLists.map((item) => {
          return (
            <Card
              sx={{
                width: 180,
                height: 265,
                "&:hover": { boxShadow: "8px 10px 8px lightgrey" },
              }}
            >
              <Box>
                <CardMedia
                  sx={{ height: 180, width: 180 }}
                  image={item.image}
                  title="shoes"
                />
                <CardContent>
                  <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                    {item.desc}
                  </Typography>
                  <Typography sx={{ fontSize: 13 }}>Rs.{item.price}</Typography>
                  <Box sx={{ display: "flex" }}>
                    {new Array(5).fill("").map((_, index) => {
                      return (
                        <Box key={index}>
                          <StarIcon
                            sx={{
                              color: ({ palette: { warning } }) => warning.main,
                              fontSize: 13,
                            }}
                          />
                        </Box>
                      );
                    })}
                    <Typography sx={{ fontSize: 10, mt: 0.3 }}>
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
            fontFamily: "Shalimar",
            fontWeight: "bold",
            fontSize: 30,
            color: "black",
          }}
        >
          Recommend for You
        </Typography>
        <Box sx={{ position: "absolute", right: 0, display: "flex" }}>
          <Typography>View All</Typography>
          <ArrowForwardIosSharpIcon sx={{ fontSize: "22.5px" }} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 1.8, mb: 2 }}>
        {prodLists.map((item) => {
          return (
            <Card
              sx={{
                width: 180,
                height: 265,
                "&:hover": { boxShadow: "8px 10px 8px lightgrey" },
              }}
            >
              <Box>
                <CardMedia
                  sx={{ height: 180, width: 180 }}
                  image={item.image}
                  title="shoes"
                />
                <CardContent>
                  <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                    {item.desc}
                  </Typography>
                  <Typography sx={{ fontSize: 13 }}>Rs.{item.price}</Typography>
                  <Box sx={{ display: "flex" }}>
                    {new Array(5).fill("").map((_, index) => {
                      return (
                        <Box key={index}>
                          <StarIcon
                            sx={{
                              color: ({ palette: { warning } }) => warning.main,
                              fontSize: 13,
                            }}
                          />
                        </Box>
                      );
                    })}
                    <Typography sx={{ fontSize: 10, mt: 0.4 }}>
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
              width: 180,
              height: 265,
              "&:hover": { boxShadow: "8px 10px 8px lightgrey" },
            }}
          >
            <Box>
              <CardMedia
                sx={{ height: 180, width: 180 }}
                image={item.image}
                title="shoes"
              />
              <CardContent>
                <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                  {item.desc}
                </Typography>
                <Typography sx={{ fontSize: 13 }}>Rs.{item.price}</Typography>
                <Box sx={{ display: "flex" }}>
                  {new Array(5).fill("").map((_, index) => {
                    return (
                      <Box key={index}>
                        <StarIcon
                          sx={{
                            color: ({ palette: { warning } }) => warning.main,
                            fontSize: 13,
                          }}
                        />
                      </Box>
                    );
                  })}
                  <Typography sx={{ fontSize: 10, mt: 0.3 }}>
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
