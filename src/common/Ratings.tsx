import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Ratings = () => {
  return (
    <Box sx={{ display: "flex", gap: 0.4 }}>
      {new Array(5).fill("").map((_, index) => {
        return (
          <Box key={index}>
            <StarIcon
              sx={{
                color: ({
                  palette: {
                    warning: { dark },
                  },
                }) => dark,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Ratings;
