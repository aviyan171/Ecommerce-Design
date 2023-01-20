import {
  AppBar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbarrr = () => {
  return (
    <Box>
      <AppBar
        sx={{
          bgcolor: "#F8F9FA",
          height: "90px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            ml: "120px",
            mr: "115px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            color="primary"
            sx={{
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "36px",
            }}
          >
            NoveltyMart
          </Typography>
          <TextField
            placeholder="Search essentials, groceries and more..."
            InputProps={{
              style: {
                height: "48px",
                width: "500px",
                borderRadius: "8px",
                fontSize: "12px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{ width: "16px", height: "16px", ml: "19.88px" }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: "flex", gap: "11px", alignItems: "center" }}>
            <IconButton>
              <PersonIcon color="secondary" />
            </IconButton>
            <Typography color="secondary" mr={2} sx={{ fontSize: "16px" }}>
              Sign Up/Sign In
            </Typography>
            <Divider orientation="vertical" sx={{ height: 30 }} />
            <IconButton>
              <ShoppingCartIcon color="secondary" />
            </IconButton>
            <Typography color="secondary" sx={{ fontSize: "16px" }}>
              Cart
            </Typography>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbarrr;
