import { Avatar, Box, Stack, Typography } from "@mui/material";

import Ratings from "./Ratings";
import people from "../assets/JPG/people.jpg";

const CustomerReviews = () => {
  return (
    <Stack mt={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          position: "relative",
        }}
      >
        <Avatar alt="people" src={people} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: 600 }}>Novelty Customer</Typography>
          <Ratings />
        </Box>
        <Typography
          sx={{
            position: "absolute",
            right: "0",
            color: "#848484",
            fontSize: 12,
          }}
        >
          Dec 12, 2022
        </Typography>
      </Box>
      <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
        Good for sprinting and short distance running.Lorem ipsum dolor sit amet
        consectetur. In dui placerat volutpat adipiscing malesuada. Turpis
        gravida ut sodales est.
      </Typography>
      <Typography sx={{ color: "#525252", mb: 5 }}>
        Color : White/Off White/ Brown, Size : EU 36
      </Typography>
    </Stack>
  );
};

export default CustomerReviews;
