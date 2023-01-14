import { Box } from "@mui/material";

import Top from "../assets/PNG/Top.png";
const Cards = () => {
  return (
    <Box mb={7}>
      <Box component="img" src={Top} alt="src" sx={{ maxwidth: "100%" }} />
    </Box>
  );
};

export default Cards;
