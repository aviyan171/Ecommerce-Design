import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { theme } from "../../../styles/theme";

const TableViewProduct = () => {
  return (
    <Paper sx={{ padding: "16px" }} square={true}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Inventory</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>#12345</TableCell>
              <TableCell>01/10/2023</TableCell>
              <TableCell>Nike Air Force 1 '07 LX</TableCell>
              <TableCell>Women’s Fashion</TableCell>
              <TableCell>100 for 3 Variants</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>$280.00</TableCell>
              <TableCell>
                <BorderColorIcon
                  sx={{
                    mr: "18px",
                    color: (theme) => theme.palette.greyScale.lighter,
                  }}
                />
                <DeleteIcon color="error" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#12345</TableCell>
              <TableCell>01/10/2023</TableCell>
              <TableCell>Nike Air Force 1 '07 LX</TableCell>
              <TableCell>Women’s Fashion</TableCell>
              <TableCell>100 for 3 Variants</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>$280.00</TableCell>
              <TableCell>
                <BorderColorIcon
                  sx={{
                    mr: "18px",
                    color: (theme) => theme.palette.greyScale.lighter,
                  }}
                />
                <DeleteIcon color="error" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#12345</TableCell>
              <TableCell>01/10/2023</TableCell>
              <TableCell>Nike Air Force 1 '07 LX</TableCell>
              <TableCell>Women’s Fashion</TableCell>
              <TableCell>100 for 3 Variants</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>$280.00</TableCell>
              <TableCell>
                <BorderColorIcon
                  sx={{
                    mr: "18px",
                    color: (theme) => theme.palette.greyScale.lighter,
                  }}
                />
                <DeleteIcon color="error" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableViewProduct;
