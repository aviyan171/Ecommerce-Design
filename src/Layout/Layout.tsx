import { Box } from "@mui/material";

interface IChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: IChildren) => {
  return <Box sx={{ bgcolor: "#F7F8FA" }}>{children}</Box>;
};

export default Layout;
