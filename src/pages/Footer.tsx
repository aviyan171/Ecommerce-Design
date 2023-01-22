import { Box, Container, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          height: 232,
          bgcolor: "#616161",
          color: "#f4f4f4",
        }}
      >
        <Container sx={{ display: "flex", gap: 15 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography sx={{ mt: 3.5 }}>Customer Care</Typography>
            <Typography>Contact</Typography>
            <Typography>Return & Exchange</Typography>
            <Typography>Delivery</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ mt: 3.5 }}>Visit Our Store</Typography>
            <Typography>Baneshowr, Kathmandu</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ mt: 3.5 }}>Footer</Typography>
            <Typography>Item 1</Typography>
            <Typography>Item 2</Typography>
            <Typography>Item 3</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ mt: 3.5 }}>Footer</Typography>
            <Typography>Item 1</Typography>
            <Typography>Item 2</Typography>
            <Typography>Item 3</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ mt: 3.5 }}>Footer</Typography>
            <Typography>Item 1</Typography>
            <Typography>Item 2</Typography>
            <Typography>Item 3</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ mt: 3.5 }}>Follow us on</Typography>
            <Box sx={{ display: "flex", gap: 2, pt: 1.5 }}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </Box>
          </Box>
        </Container>
        <Typography mt={5} textAlign="center">
          2022 All rights reserved. NovelMart Ltd.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
