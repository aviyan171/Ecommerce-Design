import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import { drawerWidth } from "../../utils/commonVariable";
import OrderStatus from "../../common/OrderStatus";
import shoes from "../../assets/JPG/shoe.jpg";
import { useState } from "react";

const OrderDetails = () => {
  const navigate = useNavigate();
  const [openNote, setOpenNote] = useState<boolean>(false);

  const handleOpenNote = () => {
    setOpenNote(true);
  };

  const handleSaveNote = () => {
    setOpenNote(false);
  };

  return (
    <Box
      sx={{
        p: "42px 32px 94px 32px ",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar />
      <Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            sx={{ display: "flex", mt: 0.5, cursor: "pointer" }}
            onClick={() => navigate("/order")}
          >
            <ArrowBackIosIcon
              sx={{
                fontSize: 16,
                mt: 0.5,
                color: (theme) => theme.palette.primary.main,
              }}
            />
            <Typography variant="body1" color="primary">
              Back
            </Typography>
          </Box>
          <Typography variant="h4" fontWeight={600}>
            Order#12345
          </Typography>
        </Box>
        <Box sx={{ mt: "16px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Typography variant="body1">
                Created :
                <Typography component="span" fontWeight={500}>
                  {" "}
                  Wed, Jan 10, 2023 , 04:48PM
                </Typography>
              </Typography>
              <Typography variant="body1">
                Created :
                <Typography component="span" fontWeight={500}>
                  {" "}
                  Wed, Jan 10, 2023 , 04:48PM
                </Typography>
              </Typography>
            </Box>
            <Typography>
              Status: <OrderStatus />
            </Typography>
            <Typography variant="body1">
              Payment Method :
              <Typography component="span" fontWeight={500}>
                {" "}
                Cash on Delivery
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box mt="35px">
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: { xl: 3.5, md: 3 } }}>
            <Paper
              sx={{
                padding: "40px 28px 28px 32px",
                height: "370px",
              }}
            >
              <Box position="relative">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    mb: "20px",
                  }}
                >
                  <Stack flexDirection="row">
                    <Box flex={2}>
                      <Typography variant="body1" fontWeight={500}>
                        Product
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flex: 1.8,
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body1" fontWeight={500}>
                        Quantity
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        Price
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        Total
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack flexDirection="row" justifyContent="space-between">
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: "85px",
                          height: "65px",
                        }}
                      >
                        <Box
                          component="img"
                          alt="shoe"
                          src={shoes}
                          sx={{ height: "100%", width: "100%" }}
                        />
                      </Box>
                      <Stack>
                        <Typography variant="h6" fontWeight={600}>
                          Nike Air Force 1 '07 LX
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography>
                      </Stack>
                    </Box>
                    <Typography sx={{ ml: { xl: 5 } }}>1</Typography>
                    <Typography sx={{ pl: 5 }}>$300.00</Typography>
                    <Typography sx={{ pl: { md: 1, xl: 0 } }}>
                      $300.00
                    </Typography>
                  </Stack>
                </Box>
                <Divider />

                <Box
                  mt="29px"
                  sx={{
                    display: "flex",
                    gap: 4,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  <Stack gap={2}>
                    <Typography>Sub Total</Typography>
                    <Typography>Shipping</Typography>
                    <Typography>Total</Typography>
                  </Stack>

                  <Stack gap={2}>
                    <Typography fontWeight={500}>$300.00</Typography>
                    <Typography fontWeight={500} pl={2}>
                      $10.00
                    </Typography>
                    <Typography fontWeight={500} pl={1}>
                      $310.00
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </Box>

          <Box flex={2}>
            <Paper
              sx={{
                height: "370px",
                ml: "16px",
                padding: "16px 101px 32px 16px ",
              }}
            >
              <Typography fontWeight={500}>Customer Details</Typography>
              <Box mt="32px">
                <Box sx={{ display: "flex", gap: 4 }}>
                  <Stack gap={1}>
                    <Typography variant="body1">Name :</Typography>
                    <Typography variant="body1">Email :</Typography>
                    <Typography variant="body1">Phone :</Typography>
                    <Box sx={{ height: "48px" }}>
                      <Typography variant="body1">Address :</Typography>
                    </Box>
                    <Typography variant="body1">Order Note :</Typography>
                  </Stack>
                  <Stack gap={1}>
                    <Typography variant="body1" fontWeight={500}>
                      Surna Maharjan
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      surna@noveltytechnology.com
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      (515)222-2222
                    </Typography>
                    <Box sx={{ height: "48px", width: "265px" }}>
                      <Typography variant="body1" fontWeight={500}>
                        1100 Oak Street Washington DC 20032
                      </Typography>
                    </Box>
                    <Box
                      sx={{ height: "70px", width: "265px", display: "flex" }}
                    >
                      {!openNote ? (
                        <>
                          <Typography variant="body1" fontWeight={500}>
                            Some short notes about customer’s order.
                          </Typography>
                          <BorderColorIcon
                            sx={{ cursor: "pointer" }}
                            onClick={handleOpenNote}
                          />
                        </>
                      ) : (
                        <Stack gap={2}>
                          <TextField
                            fullWidth
                            placeholder="Write short note of customer"
                            inputProps={{
                              style: {
                                height: "70px",
                              },
                            }}
                          />
                          <Box textAlign="right">
                            <Button
                              variant="save"
                              sx={{
                                "&:hover": { backgroundColor: "#2A3969" },
                                opacity: 1,
                              }}
                              onClick={handleSaveNote}
                            >
                              Save
                            </Button>
                          </Box>
                        </Stack>
                      )}
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderDetails;
