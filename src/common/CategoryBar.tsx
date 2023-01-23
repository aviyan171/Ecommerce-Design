import { Box, Container, Typography } from "@mui/material";

const CategoryBar = () => {
  const categoryLists = [
    "Womens Fashion",
    "Mens Fashion",
    "Groceries",
    "Daily Needs",
    "Electronics & Appliances",
    "Tv & Home Appliances",
    "Sports & Outdoor",
    "Sports & Outdoor",
  ];
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#ECF1FF",
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { md: 4, xl: 11 },
            ml: { md: 8, xl: 10 },
            mr: { md: 8, xl: 10 },
          }}
        >
          {categoryLists.map((item, index) => {
            return (
              <Box key={index}>
                <Typography
                  color="primary"
                  sx={{
                    fontSize: 13,
                    fontWeight: 400,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryBar;
