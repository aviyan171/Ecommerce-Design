import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Container,
  Stack,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar = () => {
  return (
    <Box>
      <AppBar
        sx={{
          background: ({ palette }) => palette.primary.contrastText,
          height: 72,
          display: "flex",
          justifyContent: "center",
        }}
        position="fixed"
      >
        <Container>
          <Toolbar>
            <Typography
              sx={{
                color: ({ palette }) => palette.primary.main,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              NovelMart
            </Typography>
            <TextField
              placeholder="search essential groceries and more"
              sx={{ margin: "0 auto" }}
              inputProps={{
                style: {
                  height: 8,
                  width: 430,
                  fontSize: 13,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: 15 }} />
                  </InputAdornment>
                ),
              }}
            />
            <Stack
              sx={{
                flexDirection: "row",
                color: ({
                  palette: {
                    primary: { main },
                  },
                }) => main,
                gap: 0.5,
              }}
            >
              <PersonOutlineIcon sx={{ fontSize: 20 }} />
              <Typography sx={{ fontSize: 14 }}>Sign Up/Log In</Typography>
              <Stack>
                <Divider sx={{ width: 50 }} orientation="vertical" />
              </Stack>
              <ShoppingCartOutlinedIcon sx={{ fontSize: 20, ml: 2 }} />
              <Typography sx={{ fontSize: 14 }}>Cart</Typography>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Navbar;
