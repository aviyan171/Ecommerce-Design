import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function OrderStatus() {
  const [status, setStatus] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl sx={{ width: 110, height: 24 }} size="small">
      <InputLabel sx={{ fontSize: 16 }}>Status</InputLabel>
      <Select
        value={status}
        onChange={handleChange}
        sx={{
          "& .css-1yehpv2-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select":
            {
              borderRadius: 24,
              fontSize: 12,
              height: 30,
              backgroundColor:
                status === "Pending"
                  ? (theme) => theme.palette.warning.light
                  : status === "Delivered"
                  ? (theme) => theme.palette.success.light
                  : (theme) => theme.palette.primary.light,
            },
          mt: 1,
        }}
      >
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="Delivered"> Delivered</MenuItem>
        <MenuItem value="Dispatched"> Dispatched</MenuItem>
      </Select>
    </FormControl>
  );
}
