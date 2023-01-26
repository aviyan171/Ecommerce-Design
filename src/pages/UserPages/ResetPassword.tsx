import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const ResetPassword = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{
          bgcolor: "F7F8FA",
          height: "325px",
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
            Reset Password
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
              label="Password"
              InputLabelProps={{
                shrink: true,
              }}
            />

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
              label="Confirm Password"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              sx={{ textTransform: "none", fontSize: "16px" }}
              variant="contained"
            >
              Reset My Password
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ResetPassword;
