import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

interface IChangePassword {
  password: boolean;
  setchangePassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ChangePassword({
  password,
  handleChange,
}: IChangePassword) {
  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={password} onChange={handleChange} />}
          label="Change Password"
        />
      </FormGroup>
    </Box>
  );
}
