import { Box, Paper, Typography } from "@mui/material";
import Google from "../assets/SVG/google-icon.svg";

const RegisterPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{
          bgcolor: "F7F8FA",
          height: "825px",
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
            New Customer Registration
          </Typography>

          <Box sx={{ border: "1px solid lightgrey ", width: "100%", mt: 5 }}>
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
              <Typography>Signup with google</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
