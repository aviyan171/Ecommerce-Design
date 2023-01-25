import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { InputBase, NativeSelect, styled } from "@mui/material";

export default function Gender() {
  const [gender, setGender] = useState("");

  const handleChange = (event: { target: { value: string } }) => {
    setGender(event.target.value);
  };
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

  return (
    <FormControl sx={{ width: 558 }} variant="standard">
      <InputLabel id="demo-select-small">Gender</InputLabel>
      <NativeSelect
        id="demo-select-small"
        value={gender}
        onChange={handleChange}
        input={<BootstrapInput />}
        inputProps={{
          style: {
            height: 44,
            backgroundColor: "#F7F8FA",
            border: "none",
            fontFamily: "poppins",
            fontSize: "12px",
          },
        }}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </NativeSelect>
    </FormControl>
  );
}
