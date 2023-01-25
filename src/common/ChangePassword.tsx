import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

export default function ChangePassword() {
  return (
    <Box>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Change Password" />
      </FormGroup>
    </Box>
  );
}
