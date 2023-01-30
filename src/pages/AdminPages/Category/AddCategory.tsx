import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DragEvent, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const AddCategory = () => {
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
    <Box>
      <Paper
        square={true}
        sx={{ height: "62px", padding: "16px 24px 16px 32px" }}
        elevation={5}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight={600}>
            Add Catagory
          </Typography>
          <CloseIcon />
        </Box>
      </Paper>
      <Box sx={{ margin: "32px 32px 30px 32px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <TextField
            fullWidth
            label="Catagory Name*"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Box>
            <Typography variant="body2" fontWeight={300}>
              Category image*
            </Typography>
            <Box
              onDrop={dropHandler}
              onDragOver={dragOverHandler}
              sx={{
                border: "none",
                bgcolor: (theme) => theme.palette.greyScale.light,
                height: "136px",
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
            <Button>Cancel</Button>
            <Button
              variant="save"
              sx={{ opacity: 1, "&:hover": { bgcolor: "#2A3969" } }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default AddCategory;
