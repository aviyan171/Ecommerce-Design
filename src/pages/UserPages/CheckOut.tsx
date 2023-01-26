import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import State from "../../common/State";
import shoes from "../assets/JPG/shoe.jpg";
import Divider from "@mui/material/Divider";

const CheckOut = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 10, mx: "auto", pt: 5 }}>
      <Typography variant="h5">Checkout</Typography>
      <Box sx={{ display: "flex", mt: 3 }}>
        <Box sx={{ flex: 1.5 }}>
          <Paper
            sx={{
              height: { xl: 702, sm: "fit-content" },
              padding: "26px 32px",
            }}
          >
            <Typography variant="body1" fontWeight={500}>
              Contact Information
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
              <Grid
                container
                columnSpacing={{ xl: 4, md: 3 }}
                rowSpacing={{ sm: 2.5 }}
              >
                <Grid item xl={6} md={6} sm={12}>
                  <TextField
                    fullWidth
                    label="First Name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xl={6} md={6} sm={12}>
                  <TextField
                    fullWidth
                    label="last Name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xl={12} md={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Typography variant="body1" fontWeight={500} mt={2.5}>
                Shipping Address
              </Typography>
              <Stack gap={3} mt={2.5}>
                <TextField
                  sx={{ mt: 2 }}
                  fullWidth
                  label="Address Line 1"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  fullWidth
                  label="Address Line 2"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Grid
                  container
                  columnGap={{ xl: 4.3, md: 3 }}
                  rowGap={{ sm: 2.5 }}
                >
                  <Grid xl={3} md={5} sm={12}>
                    <TextField
                      fullWidth
                      label="City"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid xl={4} md={5} sm={12}>
                    <State />
                  </Grid>

                  <Grid xl={4} md={6} sm={12}>
                    <TextField
                      fullWidth
                      label="Zip"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Stack>

              <Box>
                <Typography variant="body1" fontWeight={500} mt={3}>
                  Payment Method
                </Typography>
                <Box mt={2}>
                  <Stack
                    gap={1}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      width: "199px",
                      height: "101px",
                      bgcolor: ({
                        palette: {
                          greyScale: { light },
                        },
                      }) => light,
                    }}
                  >
                    <LocalShippingOutlinedIcon
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    />
                    <Typography>Cash on Delivery</Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ height: 450, width: 500, ml: 3, padding: "32px" }}>
            <Typography variant="h5">Order Summary</Typography>
            <Box mt={2}>
              <Box sx={{ display: "flex", gap: 2, mb: 1.5 }}>
                <Box
                  component="img"
                  alt="shoes"
                  src={shoes}
                  sx={{ height: "98px", width: "121px" }}
                />
                <Stack gap={0.7}>
                  <Typography variant="body2" fontWeight={400}>
                    XULA
                  </Typography>
                  <Typography variant="h6">Nike Air Force 1 '07 LX</Typography>
                  <Typography variant="body2">
                    Product Description,Size,Color
                  </Typography>
                  <Typography variant="body2">$ 280.00</Typography>
                </Stack>
              </Box>
              <Divider />
            </Box>
            <Box mt={2}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Stack gap={2}>
                  <Typography fontWeight={450}>Deliver Charge</Typography>
                  <Typography fontWeight={450}>Cart Sub Total</Typography>
                  <Typography variant="h6" fontWeight={450} color="primary">
                    Order Total
                  </Typography>
                </Stack>
                <Stack alignSelf="flex-start" gap={2}>
                  <Typography fontWeight={450}>$8.00</Typography>
                  <Typography fontWeight={450}>$280.00</Typography>
                  <Typography variant="h6" fontWeight={450} color="primary">
                    $288.00
                  </Typography>
                </Stack>
              </Box>
              <Button
                sx={{ height: "56px", mt: 3 }}
                variant="contained"
                fullWidth
              >
                Place Order
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default CheckOut;
