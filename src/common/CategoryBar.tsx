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
          bgcolor: "#bbdefb",
          height: 48,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container sx={{ display: "flex", gap: 3 }}>
          {categoryLists.map((item, index) => {
            return (
              <Box key={index}>
                <Typography
                  sx={{
                    color: ({ palette: { primary } }) => primary.main,
                    fontSize: 14,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            );
          })}
        </Container>
      </Box>
    </Box>
  );
};

export default CategoryBar;
