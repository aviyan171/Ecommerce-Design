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
          bgcolor: ({
            palette: {
              common: { white },
            },
          }) => white,
          height: 85,
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
            sx={{
              background: (theme) => theme.palette.greyScale.light,
              borderRadius: "4px",
              width: 500,
              border: ({
                palette: {
                  greyScale: { lighter },
                },
              }) => `1px solid ${lighter}`,
            }}
            placeholder="Search essentials, groceries and more..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ height: "16px" }} />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: "flex", gap: "11px", alignItems: "center" }}>
            <IconButton>
              <PersonIcon color="primary" />
            </IconButton>
            <Typography color="primary" mr={2} sx={{ fontSize: "16px" }}>
              Sign Up/Sign In
            </Typography>
            <Divider orientation="vertical" sx={{ height: 30 }} />
            <IconButton>
              <ShoppingCartIcon color="primary" />
            </IconButton>
            <Typography color="primary" sx={{ fontSize: "16px" }}>
              Cart
            </Typography>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbarrr;
