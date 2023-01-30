import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface IViews {
  views: string;
  handleChange: (event: SelectChangeEvent) => void;
}

export default function View({ handleChange, views }: IViews) {
  return (
    <FormControl sx={{ width: 152, height: 40 }} size="medium">
      <InputLabel sx={{ fontSize: 11, pl: 2 }}>View</InputLabel>
      <Select
        value={views}
        onChange={handleChange}
        inputProps={{
          style: {
            fontSize: "12px",
          },
        }}
      >
        <MenuItem value="Table View">Table View</MenuItem>
        <MenuItem value="Card View"> Card View</MenuItem>
      </Select>
    </FormControl>
  );
}
