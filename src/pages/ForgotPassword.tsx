import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const ForgotPassword = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{
          bgcolor: "F7F8FA",
          height: "255px",
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
            Forgot Password
          </Typography>
          <Box
            sx={{
              mt: 5,
              gap: 3,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <TextField
              sx={{ width: "100%", "& fieldset": { border: "none" } }}
              type="password"
              InputProps={{
                style: {
                  height: "40px",
                  borderRadius: "4px",
                  backgroundColor: "#F7F8FA",
                  width: "100%",
                },
              }}
              label="Email"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button sx={{ textTransform: "none" }} variant="contained">
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;
