import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function CategoryDropDown() {
  const [showCategory, setShowCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setShowCategory(event.target.value);
  };

  return (
    <FormControl sx={{ width: 152, height: 40 }} size="medium">
      <InputLabel sx={{ fontSize: 11, pl: 2 }}>Category</InputLabel>
      <Select
        value={showCategory}
        onChange={handleChange}
        inputProps={{
          style: {
            fontSize: "12px",
          },
        }}
      >
        <MenuItem value="Women's Fashion">Women's Fashion</MenuItem>
        <MenuItem value="Men's Fashion"> Men's Fashion</MenuItem>
        <MenuItem value="Gents"> Gents</MenuItem>
      </Select>
    </FormControl>
  );
}
