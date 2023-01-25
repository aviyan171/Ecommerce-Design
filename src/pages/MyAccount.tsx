import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ChangePassword from "../common/ChangePassword";
import Gender from "../common/Gender";
import MYWishList from "../common/MyWishList";

const MyAccount = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 10, mx: "auto", pt: 5 }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 0.2 }}>
          <MYWishList />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Paper
            sx={{
              padding: "32px",
              ml: "30px",
              height: 752,
              position: "relative",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Contact Information
                </Typography>

                <Box
                  sx={{
                    width: "558px",
                    mt: "53px",
                  }}
                >
                  <Grid container rowGap={3}>
                    <Grid xl={12} md={12} sm={12} xs={12}>
                      <TextField
                        fullWidth
                        label="First Name"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>

                    <Grid xl={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid xl={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid xl={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Contact Number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>

                    <Grid xl={12} md={12} xs={12}>
                      <Gender />
                    </Grid>
                    <Grid xl={12} md={12} xs={12}>
                      <ChangePassword />
                    </Grid>
                    <Grid xl={12} md={12} xs={12}>
                      <Button
                        variant="save"
                        sx={{ "&:hover": { backgroundColor: "#2A3969" } }}
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box sx={{ ml: 5 }}>
                <Typography variant="h6" fontWeight="bold">
                  Change Password
                </Typography>
                <Grid container rowGap={3} mt="53px">
                  <Grid xl={12} md={12} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Current Password"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>

                  <Grid xl={12} md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="New Password"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      helperText="Passwords must be at least 8 characters."
                    />
                  </Grid>

                  <Grid xl={12} md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Confirm Password"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default MyAccount;
