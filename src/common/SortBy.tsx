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
    <FormControl sx={{ width: 245, height: 44 }} size="medium">
      <InputLabel sx={{ fontSize: 16 }}>Sort by:</InputLabel>
      <Select
        value={sortBy}
        onChange={handleChange}
        inputProps={{
          style: {
            fontSize: "12px",
          },
        }}
      >
        <MenuItem value="Expensive">Price High to low</MenuItem>
        <MenuItem value="Expensive">Most Relevent</MenuItem>
        <MenuItem value="Medium">Price Low to High</MenuItem>
      </Select>
    </FormControl>
  );
}
