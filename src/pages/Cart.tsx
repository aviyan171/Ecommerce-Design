import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import shoe from "../assets/JPG/shoes.jpg";
import { prodLists } from "./arrayProdList";
import ProductCard from "../common/ProductCard";

const Cart = () => {
  return (
    <Container maxWidth="xl" sx={{ mx: "auto", pt: 5 }}>
      <Typography variant="h5">My Cart</Typography>
      <Box mt={"34px"}>
        <Box sx={{ display: "flex" }}>
          <Box flex={1}>
            <Paper
              square={true}
              sx={{
                height: "201px",
                padding: "32px  81px 32px 32px",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
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
                    <Stack flexDirection="row" gap={1.5} pt={0.65}>
                      <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                      <DeleteForeverOutlinedIcon sx={{ fontSize: 20 }} />
                    </Stack>
                  </Stack>
                </Box>
                <Stack mt={2} gap={1}>
                  <Typography variant="body1" fontWeight={500}>
                    Quantity
                  </Typography>
                  <Box
                    sx={{
                      height: 44,
                      width: 104,
                      border: "1px solid #848484",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 16px",
                    }}
                  >
                    <Typography>1</Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", pr: 1 }}
                    >
                      <ExpandLessIcon sx={{ fontSize: 20, color: "#575656" }} />
                      <ExpandMoreIcon sx={{ fontSize: 20, color: "#575656" }} />
                    </Box>
                  </Box>
                </Stack>
                <Box mt={2}>
                  <Typography variant="body1" fontWeight={500}>
                    Price
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    $280.00
                  </Typography>
                </Box>
              </Box>
            </Paper>

            <Paper
              square={true}
              sx={{
                height: "201px",
                padding: "32px  81px 32px 32px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
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
                    <Stack flexDirection="row" gap={1.5} pt={0.65}>
                      <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                      <DeleteForeverOutlinedIcon sx={{ fontSize: 20 }} />
                    </Stack>
                  </Stack>
                </Box>
                <Stack mt={2} gap={1}>
                  <Typography variant="body1" fontWeight={500}>
                    Quantity
                  </Typography>
                  <Box
                    sx={{
                      height: 44,
                      width: 104,
                      border: "1px solid #848484",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 16px",
                    }}
                  >
                    <Typography>1</Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", pr: 1 }}
                    >
                      <ExpandLessIcon sx={{ fontSize: 20, color: "#575656" }} />
                      <ExpandMoreIcon sx={{ fontSize: 20, color: "#575656" }} />
                    </Box>
                  </Box>
                </Stack>
                <Box mt={2}>
                  <Typography variant="body1" fontWeight={500}>
                    Price
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    $280.00
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box flex={0.35} ml="25px">
            <Paper sx={{ padding: "32px 58px 28px 32px", height: 275 }}>
              <Typography variant="h5">Summary</Typography>
              <Box
                sx={{ display: "flex", mt: 4, justifyContent: "space-between" }}
              >
                <Stack gap={1}>
                  <Typography>Subtotal</Typography>
                  <Typography fontWeight={500}>Total</Typography>
                </Stack>
                <Stack gap={1}>
                  <Typography>$280.00</Typography>
                  <Typography fontWeight={500}>$280.00</Typography>
                </Stack>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: "44px", height: 56 }}
              >
                Proceed to Checkout
              </Button>
            </Paper>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" mt="99px">
            People also bought
          </Typography>
          <Box mt="16">
            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexWrap: "wrap",
                gap: { xl: 5.7, md: 1 },
              }}
            >
              {prodLists.map((item) => {
                return <ProductCard item={item} />;
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
