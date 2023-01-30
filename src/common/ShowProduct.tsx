import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function ShowProductDropDown() {
  const [showProduct, setShowProduct] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setShowProduct(event.target.value);
  };

  return (
    <FormControl sx={{ width: 152, height: 40 }} size="medium">
      <InputLabel sx={{ fontSize: 12, pl: 2 }}>Show 10</InputLabel>
      <Select
        value={showProduct}
        onChange={handleChange}
        inputProps={{
          style: {
            fontSize: "12px",
          },
        }}
      >
        <MenuItem value="Show 10">Show 10 </MenuItem>
        <MenuItem value=" Show 20"> Show 20</MenuItem>
        <MenuItem value="Show 30"> Show 30</MenuItem>
      </Select>
    </FormControl>
  );
}
