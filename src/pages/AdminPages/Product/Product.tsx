import {
  Box,
  Button,
  Grid,
  InputAdornment,
  SelectChangeEvent,
  TextField,
  Toolbar,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import { drawerWidth } from "../../../utils/commonVariable";
import CategoryDropDown from "../../../common/CategoryDropDown";
import ShowProductDropDown from "../../../common/ShowProduct";
import AdminProductList from "./AdminProductList";
import { useNavigate } from "react-router-dom";
import View from "../../../common/View";
import TableViewProduct from "./TableViewProduct";

const Product = () => {
  const [views, setView] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setView(event.target.value);
  };

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: "32px 32px 94px 25px ",
        ml: { xl: `${drawerWidth}px`, sm: 0, md: `${drawerWidth}px` },
      }}
    >
      <Toolbar />
      <Grid container rowGap={2}>
        <Grid item xl={8} md={6} xs={12}>
          <TextField
            sx={{
              background: (theme) => theme.palette.common.white,
              borderRadius: "4px",
              width: 360,

              border: ({
                palette: {
                  greyScale: { lighter },
                },
              }) => `1px solid ${lighter}`,
            }}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ height: "16px" }} />
                </InputAdornment>
              ),
            }}
            inputProps={{
              style: {
                backgroundColor: "#FFFFFF",
              },
            }}
          />
        </Grid>
        <Grid item xl={4} md={6} xs={12}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <View views={views} handleChange={handleChange} />
            <CategoryDropDown />
            <ShowProductDropDown />
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              sx={{
                width: 160,
                height: 40,
                fontWeight: 200,
                padding: 0,
              }}
              onClick={() => navigate("/add-product")}
            >
              Add Product
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: "39px" }}>
        {views === "Card View" ? (
          <Box
            sx={{
              display: "flex",
              gap: { xl: 9, md: 5 },
              flexWrap: "wrap",
              justifyContent: { md: "center", xl: "none" },
            }}
          >
            <AdminProductList />
            <AdminProductList />
            <AdminProductList />
            <AdminProductList />
            <AdminProductList />
            <AdminProductList />
            <AdminProductList />
            <AdminProductList />
            <AdminProductList />
            <AdminProductList />
          </Box>
        ) : (
          <TableViewProduct />
        )}
      </Box>
    </Box>
  );
};

export default Product;
