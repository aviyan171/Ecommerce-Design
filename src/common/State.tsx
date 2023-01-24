import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function State() {
  const [state, setState] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  return (
    <FormControl sx={{ width: 245, height: 50, mt: 0.5 }} size="small">
      <InputLabel sx={{ fontSize: 14 }}>State</InputLabel>
      <Select value={state} onChange={handleChange} label="State">
        <MenuItem value="Bagmati">Bagmati</MenuItem>
        <MenuItem value="Gandaki">Gandaki</MenuItem>
        <MenuItem value="Lumbini">Lumbini</MenuItem>
        <MenuItem value="Karkali">Karkali</MenuItem>
      </Select>
    </FormControl>
  );
}
