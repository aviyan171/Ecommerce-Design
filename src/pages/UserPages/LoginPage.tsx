import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import Google from "../assets/SVG/google-icon.svg";

export const LoginPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{
          bgcolor: "F7F8FA",
          height: "539px",
          width: "583px",
          borderRadius: "4px",
          mt: "154px",
        }}
      >
        <Box
          sx={{
            margin: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "28px", fontWeight: 600 }}>
            Sign in to your account
          </Typography>

          <Box
            sx={{
              border: "1px solid #F7F8FA",
              width: "100%",
              mt: 4,
              boxShadow: "0px 4px 8px 0px #00000021",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={Google}
                alt="icon"
                sx={{ height: 50, width: 25 }}
              />
              <Typography sx={{ cursor: "pointer" }}>
                Signin with google
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{ width: "100%", mt: 2, fontSize: 12, color: "#525252" }}
          >
            or signin with email
          </Divider>

          <Box
            sx={{
              mt: 5,
              gap: 5,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <TextField
              label="Email"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Box sx={{ position: "relative" }}>
              <TextField
                label="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <Typography
                color="primary"
                sx={{
                  fontSize: "12px",
                  position: "absolute",
                  right: 0,
                  bottom: -20,
                  cursor: "pointer",
                }}
              >
                Forgot password?
              </Typography>
            </Box>
            <Button sx={{ textTransform: "none" }} variant="contained">
              Sign In
            </Button>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Don’t have an account?
              <Typography
                component="span"
                color="primary"
                sx={{ fontSize: "12px", fontWeight: 600, cursor: "pointer" }}
              >
                Create one now
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
