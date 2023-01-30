import {
  Avatar,
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import chart from "../../../assets/PNG/Capture.png";

import Status from "../../../common/Status";
import { drawerWidth } from "../../../utils/commonVariable";

const Dashboard = () => {
  return (
    <Box
      sx={{
        p: "39px 32px 94px 32px ",
        ml: { xl: `${drawerWidth}px`, sm: 0, md: `${drawerWidth}px` },
      }}
    >
      <Toolbar />
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="h6" fontWeight={600}>
          Hello! Super Admin
        </Typography>
        <Status />
      </Stack>
      <Box mt="25px">
        <Box
          sx={{
            display: "flex",
            gap: { xl: 16, md: 6 },
            flexDirection: { xl: "row", md: "row", xs: "column" },
          }}
        >
          <Paper
            sx={{
              height: "118px",
              width: { xl: "440px", md: "300px" },
              padding: "34px 202px 28px 32px",
            }}
          >
            <Box display="flex" gap="32px">
              <Avatar
                sx={{
                  bgcolor: (theme) => theme.palette.warning.main,
                  height: "50px",
                  width: "50px",
                }}
              >
                <AttachMoneyIcon />
              </Avatar>
              <Stack gap={0.5}>
                <Typography variant="body1" fontWeight={500}>
                  Total Sales
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  $1234567.20
                </Typography>
              </Stack>
            </Box>
          </Paper>

          <Paper
            sx={{
              height: "118px",
              width: { xl: "440px", md: "300px" },
              padding: "34px 202px 28px 32px",
            }}
          >
            <Box display="flex" gap="32px">
              <Avatar
                sx={{
                  bgcolor: (theme) => theme.palette.success.main,
                  height: "50px",
                  width: "50px",
                }}
              >
                <ShoppingCartIcon />
              </Avatar>
              <Stack gap={0.5}>
                <Typography variant="body1" fontWeight={500}>
                  Total Orders
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  12345
                </Typography>
              </Stack>
            </Box>
          </Paper>
          <Paper
            sx={{
              height: "118px",
              width: { xl: "440px", md: "300px" },
              padding: "34px 202px 28px 32px",
            }}
          >
            <Box display="flex" gap="32px">
              <Avatar
                sx={{
                  bgcolor: "#07527E",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Inventory2Icon />
              </Avatar>
              <Stack gap={0.5}>
                <Typography variant="body1" fontWeight={500}>
                  Total Products
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  1234
                </Typography>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Paper sx={{ mt: "32px", height: "337px" }}>
        <Box component="img" src={chart} alt="chary" sx={{ width: "80%" }} />
      </Paper>

      <Typography variant="h6" fontWeight="600" sx={{ mt: "32px" }}>
        Latest Orders
      </Typography>
      <Box mt="32px">
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
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>#12345</TableCell>
                  <TableCell>01/10/2023</TableCell>
                  <TableCell>Surna Maharjan</TableCell>
                  <TableCell>surna@noveltytechnology.com</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        width: "70px",
                        height: "24px",
                        borderRadius: "24px",
                        bgcolor: "rgba(125, 212, 181, 0.2)",
                      }}
                    >
                      <Typography sx={{ color: "#007750" }}>
                        Deliverd
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>$300.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>#12345</TableCell>
                  <TableCell>01/10/2023</TableCell>
                  <TableCell>Surna Maharjan</TableCell>
                  <TableCell>surna@noveltytechnology.com</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        width: "70px",
                        height: "24px",
                        borderRadius: "24px",
                        bgcolor: "rgba(230, 163, 19, 0.2)",
                      }}
                    >
                      <Typography sx={{ color: "#E6A313" }}>Pending</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>$300.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>#12345</TableCell>
                  <TableCell>01/10/2023</TableCell>
                  <TableCell>Surna Maharjan</TableCell>
                  <TableCell>surna@noveltytechnology.com</TableCell>
                  <TableCell>
                    {" "}
                    <Box
                      sx={{
                        width: "70px",
                        height: "24px",
                        borderRadius: "24px",
                        bgcolor: "rgba(125, 212, 181, 0.2)",
                      }}
                    >
                      <Typography sx={{ color: "#007750" }}>
                        Deliverd
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>$300.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
