import { Search } from "@mui/icons-material";
import {
  Box,
  Grid,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

import OrderStatus from "../../common/OrderStatus";
import ShowOrderLists from "../../common/ShowTen";
import Status from "../../common/Status";
import Today from "../../common/Today";
import { drawerWidth } from "../../utils/commonVariable";

const Order = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          p: "32px 32px 94px 32px ",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { xl: `${drawerWidth}px`, sm: 0, md: `${drawerWidth}px` },
        }}
      >
        <Toolbar />

        <Grid container rowGap={2}>
          <Grid item xl={9} md={7} xs={12}>
            <TextField
              sx={{
                background: (theme) => theme.palette.common.white,
                borderRadius: "4px",
                width: 360,

                border: ({
                  palette: {
                    greyScale: { lighter },
                  },
                }) => `1px solid ${lighter}`,
              }}
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ height: "16px" }} />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                style: {
                  backgroundColor: "#FFFFFF",
                },
              }}
            />
          </Grid>
          <Grid item xl={3} md={5} xs={12}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Today />
              <Status />
              <ShowOrderLists />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: "28px" }}>
          <Paper sx={{ padding: "16px" }} square={true}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>#12345</TableCell>
                    <TableCell>01/10/2023</TableCell>
                    <TableCell>01/10/2023</TableCell>
                    <TableCell
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/order-details");
                      }}
                    >
                      surna@noveltytechnology.com
                    </TableCell>
                    <TableCell>
                      <OrderStatus />
                    </TableCell>
                    <TableCell>$300.00</TableCell>
                    <TableCell>
                      <DeleteIcon color="error" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>#12345</TableCell>
                    <TableCell>01/10/2023</TableCell>
                    <TableCell>01/10/2023</TableCell>
                    <TableCell>surna@noveltytechnology.com</TableCell>
                    <TableCell>
                      <OrderStatus />
                    </TableCell>
                    <TableCell>$300.00</TableCell>
                    <TableCell>
                      <DeleteIcon color="error" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>#12345</TableCell>
                    <TableCell>01/10/2023</TableCell>
                    <TableCell>01/10/2023</TableCell>
                    <TableCell>surna@noveltytechnology.com</TableCell>
                    <TableCell>
                      <OrderStatus />
                    </TableCell>
                    <TableCell>$300.00</TableCell>
                    <TableCell>
                      <DeleteIcon color="error" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Order;
