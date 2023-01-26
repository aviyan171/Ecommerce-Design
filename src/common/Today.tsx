import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function Today() {
  const [today, setToday] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setToday(event.target.value);
  };

  return (
    <FormControl sx={{ width: 116.35, height: 44 }} size="medium">
      <InputLabel sx={{ fontSize: 12, pl: 2 }}>Today</InputLabel>
      <Select
        value={today}
        onChange={handleChange}
        inputProps={{
          style: {
            fontSize: "12px",
          },
        }}
      >
        <MenuItem value="Yesterday">Yesterday</MenuItem>
        <MenuItem value="5 days ago"> 5 days ago</MenuItem>
        <MenuItem value="10 days ago">10 days ago</MenuItem>
      </Select>
    </FormControl>
  );
}
