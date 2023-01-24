import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  useTheme,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Google from "../assets/SVG/google-icon.svg";

const RegisterPage = () => {
  const theme = useTheme();

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
              <Typography>Signup with google</Typography>
            </Box>
          </Box>
          <Divider
            sx={{ width: "100%", mt: 2, fontSize: 12, color: "#525252" }}
          >
            or signup with email
          </Divider>
          <Box sx={{ mt: 5, gap: 4, display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2.5 }}>
              <FormControl>
                <InputLabel shrink>First Name</InputLabel>

                <TextField />
              </FormControl>
              <TextField
                label="last Name"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <TextField
              label="Email"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Contact Number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Password"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={"Passwords must be at least 8 characters."}
            />

            <TextField
              label="Confirm Password"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree with the terms and conditions"
              />
            </FormGroup>
            <Button sx={{ textTransform: "none" }} variant="contained">
              Signup
            </Button>
            <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
              Already a member?
              <Typography component="span" color="primary" fontSize="12px">
                Login and continue
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
