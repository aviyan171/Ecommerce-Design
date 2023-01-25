import { Paper, Stack, Typography } from "@mui/material";

export const MYWishList = () => {
  return (
    <Paper sx={{ padding: "32px 16px", height: 289 }}>
      <Stack gap={1}>
        <Typography
          variant="body1"
          sx={{
            bgcolor: (theme) => theme.palette.primary.light,
            padding: "8px 16px 8px 8px",
          }}
        >
          My Account
        </Typography>
        <Typography variant="body1">My Wishlist</Typography>
      </Stack>
    </Paper>
  );
};

export default MYWishList;
