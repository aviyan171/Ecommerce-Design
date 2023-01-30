import FormControl from "@mui/material/FormControl";

import { useState } from "react";
import { InputBase, NativeSelect, styled } from "@mui/material";

export default function BrandDropDown() {
  const [brandDropDown, setBrandDropDown] = useState("");

  const handleChange = (event: { target: { value: string } }) => {
    setBrandDropDown(event.target.value);
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
    <FormControl fullWidth variant="standard">
      <NativeSelect
        id="demo-select-small"
        value={brandDropDown}
        onChange={handleChange}
        sx={{
          "& .css-bepy6d-MuiNativeSelect-select-MuiInputBase-input:not([multiple]) option, .css-bepy6d-MuiNativeSelect-select-MuiInputBase-input:not([multiple]) optgroup":
            {
              backgroundColor: (theme) => theme.palette.greyScale.light,
              fontFamily: "poppins",
              fontSize: "16px",
              border: "none",
            },
        }}
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
        <option value="Nike">Nike</option>
        <option value="Addidas">Addidas</option>
        <option value="Reebook">Reebook</option>
      </NativeSelect>
    </FormControl>
  );
}