import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function SortBy() {
  const [sortBy, setSortBy] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  return (
    <FormControl sx={{ width: 245, height: 44 }} size="small">
      <InputLabel id="demo-select-small">Sort by:</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={sortBy}
        label="Sort by:"
        onChange={handleChange}
      >
        <MenuItem value="Expensive">Expensive</MenuItem>
        <MenuItem value="Expensive">Most Relevent</MenuItem>
        <MenuItem value="Cheap">Cheap</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
      </Select>
    </FormControl>
  );
}
