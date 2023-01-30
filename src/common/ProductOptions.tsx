import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const ProductOptions = () => {
  return (
    <Box>
      <FormGroup>
        <Box sx={{ display: "flex", gap: "126px" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Color"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Size"
          />
        </Box>
      </FormGroup>
    </Box>
  );
};

export default ProductOptions;
