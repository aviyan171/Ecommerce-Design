import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

export default function CheckboxLabels() {
  return (
    <Box>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="X-Small" />
        <FormControlLabel control={<Checkbox />} label="Small" />
        <FormControlLabel control={<Checkbox />} label="Medium" />
        <FormControlLabel control={<Checkbox />} label="Large" />
        <FormControlLabel control={<Checkbox />} label="X-Large" />
        <FormControlLabel control={<Checkbox />} label="XX-Large" />
      </FormGroup>
    </Box>
  );
}
