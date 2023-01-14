import { Box } from "@mui/material";

interface IChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: IChildren) => {
  return (
    <Box sx={{ backgroundColor: ({ palette }) => palette.primary.light }}>
      {children}
    </Box>
  );
};

export default Layout;
