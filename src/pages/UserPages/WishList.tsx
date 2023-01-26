import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import MYWishList from "../../common/MyWishList";
import shoe from "../assets/JPG/shoes.jpg";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const WishList = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 10, mx: "auto", pt: 5 }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 0.2 }}>
          <MYWishList />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ padding: "32px", height: "752px", ml: "30px" }}>
            <Typography variant="h6" fontWeight="600">
              My Wishlists
            </Typography>
            <Box mt="34px">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: "40px",
                }}
              >
                <Box sx={{ display: "flex", gap: "32px" }}>
                  <Box
                    sx={{
                      height: 137,
                      width: 180,
                      overflow: "hidden",
                      mx: "auto",
                    }}
                  >
                    <Box
                      component="img"
                      src={shoe}
                      alt="shoe"
                      sx={{ height: "100%", width: "100%" }}
                    />
                  </Box>
                  <Stack gap={1}>
                    <Typography sx={{ fontSize: 9 }}>XULA</Typography>
                    <Typography variant="h6" fontWeight={600}>
                      Nike Air Force 1 '07 LX
                    </Typography>
                    <Typography variant="body2">
                      Product Description,Size,Color
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                    <DeleteForeverOutlinedIcon sx={{ fontSize: 20 }} />
                  </Stack>
                </Box>
                <Box mt={2.5}>
                  <Typography variant="body1" fontWeight={500}>
                    Price
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    $280.00
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button startIcon={<ShoppingCartIcon />} variant="contained">
                    Add to Cart
                  </Button>
                </Box>
              </Box>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: "40px",
                }}
              >
                <Box sx={{ display: "flex", gap: "32px" }}>
                  <Box
                    sx={{
                      height: 137,
                      width: 180,
                      overflow: "hidden",
                      mx: "auto",
                    }}
                  >
                    <Box
                      component="img"
                      src={shoe}
                      alt="shoe"
                      sx={{ height: "100%", width: "100%" }}
                    />
                  </Box>
                  <Stack gap={1}>
                    <Typography sx={{ fontSize: 9 }}>XULA</Typography>
                    <Typography variant="h6" fontWeight={600}>
                      Nike Air Force 1 '07 LX
                    </Typography>
                    <Typography variant="body2">
                      Product Description,Size,Color
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                    <DeleteForeverOutlinedIcon sx={{ fontSize: 20 }} />
                  </Stack>
                </Box>
                <Box mt={2.5}>
                  <Typography variant="body1" fontWeight={500}>
                    Price
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    $280.00
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button startIcon={<ShoppingCartIcon />} variant="contained">
                    Add to Cart
                  </Button>
                </Box>
              </Box>
              <Divider sx={{ mt: 2, mb: 2 }} />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default WishList;
