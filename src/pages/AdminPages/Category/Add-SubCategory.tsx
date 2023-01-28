import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const AddSubCategory = () => {
  return (
    <Box>
      <Paper
        square={true}
        sx={{ height: "62px", padding: "16px 24px 16px 32px" }}
        elevation={5}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight={600}>
            Add Sub Catagory
          </Typography>
          <CloseIcon />
        </Box>
      </Paper>
      <Box sx={{ margin: "32px 32px 30px 32px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <TextField
            fullWidth
            placeholder="eg. Clothing"
            label="Catagory Name*"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            placeholder="Women's Fashion"
            label="Parent Catagory*"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            placeholder="Drag and Drop here "
            // sx={{ height: "136px" }}
            label="Catagory Image*"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              style: {
                height: "136px",
              },
            }}
          />
          <Stack flexDirection="row" justifyContent="space-between">
            <Button>Cancel</Button>
            <Button
              variant="save"
              sx={{ opacity: 1, "&:hover": { bgcolor: "#2A3969" } }}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
