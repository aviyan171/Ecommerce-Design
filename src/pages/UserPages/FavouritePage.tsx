import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import shoes from "../assets/JPG/shoes.jpg";

const FavouritePage = () => {
  return (
    <TableContainer
      sx={{
        width: 800,
        position: "absolute",
        // left: "50%",
        right: "30%",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Stock Status </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Box component="img" src={shoes} alt="img" />
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              magni.
            </TableCell>
            <TableCell>$500</TableCell>
            <TableCell>Available</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Box component="img" src={shoes} alt="img" />
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              magni.
            </TableCell>
            <TableCell>$500</TableCell>
            <TableCell>Available</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FavouritePage;
