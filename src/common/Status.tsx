import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function Status() {
  const [status, setStatus] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl sx={{ width: 116.35, height: 44 }} size="medium">
      <InputLabel sx={{ fontSize: 12, pl: 2 }}>Status</InputLabel>
      <Select
        value={status}
        onChange={handleChange}
        inputProps={{
          style: {
            fontSize: "12px",
          },
        }}
      >
        <MenuItem value="Completed">Completed</MenuItem>
        <MenuItem value="Pending"> pending</MenuItem>
      </Select>
    </FormControl>
  );
}
