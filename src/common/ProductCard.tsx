import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Items } from "../pages/UserPages/interface";

export interface Itemss {
  item: Items;
}

const ProductCard = ({ item }: Itemss) => {
  return (
    <Card
      sx={{
        width: { md: 185, xl: 210 },
        height: { md: 280, xl: 280 },
        "&:hover": { boxShadow: "8px 10px 8px lightgrey" },
        position: "relative",
      }}
    >
      <Box>
        <Box sx={{ height: 180, width: 180, overflow: "hidden", mx: "auto" }}>
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
          <Typography sx={{ fontSize: 10 }}>BRAND/TYPE</Typography>
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
            <Typography
              component="span"
              sx={{
                fontStyle: "italic",
                fontSize: 13,
                ml: 1,
                textDecoration: "line-through",
              }}
            >
              $6000
            </Typography>
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
};

export default ProductCard;
