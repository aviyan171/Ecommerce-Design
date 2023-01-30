import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState, DragEvent } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import BrandDropDown from "../../../common/BrandDropDown";
import ProductOptions from "../../../common/ProductOptions";
import ProductStatusDropDown from "../../../common/ProductStatusDropDown";
import SelectCategoryDropDown from "../../../common/SelectCategoryDropDown";
import { drawerWidth } from "../../../utils/commonVariable";

const AddProduct = () => {
  const [images, setImages] = useState<FileList>();

  const dropHandler = (e: DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files[0].type === "image/jpeg" || "image/png" || "image/svg")
      setImages(files);
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    if (images) {
      console.log(images);
    }
  };
  return (
    <Box
      sx={{
        p: "37px 32px 0px 35px ",
        ml: { xl: `${drawerWidth}px`, sm: 0, md: `${drawerWidth}px` },
      }}
    >
      <Toolbar />
      <Paper sx={{ pt: "25px", pl: "32px" }} square={true}>
        <Typography variant="h6" fontWeight={600}>
          Add Product
        </Typography>
        <Box
          mt="40px"
          width={806}
          display="flex"
          flexDirection="column"
          gap="32px"
        >
          <Box display="flex" gap="32px">
            <Box width="212px" pt={1}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ textAlign: "right" }}
              >
                Product Title
              </Typography>
            </Box>
            <TextField fullWidth />
          </Box>
          <Box display="flex" gap="32px">
            <Box width="212px" pt={1}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ textAlign: "right" }}
              >
                Category
              </Typography>
            </Box>
            <SelectCategoryDropDown />
          </Box>
          <Box display="flex" gap="32px">
            <Box width="212px" pt={1}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ textAlign: "right" }}
              >
                Sub-Catagory
              </Typography>
            </Box>
            <SelectCategoryDropDown />
          </Box>

          <Box display="flex" gap="32px">
            <Box width="212px" pt={1}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ textAlign: "right" }}
              >
                Product Description
              </Typography>
            </Box>
            <TextField
              fullWidth
              inputProps={{
                style: {
                  height: "137px",
                },
              }}
            />
          </Box>

          <Box display="flex" gap="32px">
            <Box width="212px" pt={1}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ textAlign: "right" }}
              >
                Brand
              </Typography>
            </Box>
            <BrandDropDown />
          </Box>
          <Box display="flex" gap="32px">
            <Box width="212px" pt={1}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ textAlign: "right" }}
              >
                Price
              </Typography>
            </Box>
            <TextField fullWidth />
          </Box>

          <Box display="flex" gap="32px">
            <Box width="212px" pt={1}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ textAlign: "right" }}
              >
                Quantity
              </Typography>
            </Box>
            <TextField fullWidth />
          </Box>

          <Box display="flex" gap="32px">
            <Box width="170px" pt={1}>
              <Typography variant="body1" fontWeight={500} sx={{ pl: 5 }}>
                Product Option
              </Typography>
            </Box>
            <ProductOptions />
          </Box>

          <Box display="flex" gap="32px">
            <Box width="212px" pt={1}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ textAlign: "right" }}
              >
                Product Status
              </Typography>
            </Box>
            <ProductStatusDropDown />
          </Box>

          <Box display="flex" gap="32px">
            <Box width="212px" pt={1}>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{ textAlign: "right" }}
              >
                Images
              </Typography>
            </Box>
            <Box
              onDrop={dropHandler}
              onDragOver={dragOverHandler}
              sx={{
                border: "none",
                bgcolor: (theme) => theme.palette.greyScale.light,
                height: "136px",
                width: "100%",
              }}
            >
              {images ? (
                <Stack alignItems="center">
                  <Typography>{images[0].name}</Typography>
                </Stack>
              ) : (
                <Stack alignItems="center" justifyContent="center">
                  <FileUploadIcon sx={{ fontSize: 40, color: "#848484" }} />
                  <Typography>Drag and Drop files here</Typography>
                  <Typography>or</Typography>
                  <Typography>Browse Files</Typography>
                </Stack>
              )}
            </Box>
          </Box>
          <Stack flexDirection="row" justifyContent="space-between">
            <Box width="212px" pt={1} pl={11}>
              <Button sx={{ textAlign: "right" }}>Cancel</Button>
            </Box>
            <Button
              variant="save"
              sx={{ opacity: 1, "&:hover": { bgcolor: "#2A3969" } }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddProduct;
