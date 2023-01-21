import { styled, TextField } from "@mui/material";

export const TextFields = (label: string) => {
  return (
    <TextField
      sx={{ "& fieldset": { border: "none" } }}
      InputProps={{
        style: {
          height: "40px",
          backgroundColor: "#F7F8FA",
          width: "100%",
        },
      }}
      label={label}
      InputLabelProps={{
        shrink: true,
        margin: "dense",
      }}
    />
  );
};

export const RegisterContainer = styled(TextField)({
  fontSize: "12px",
  "& fieldset": { border: "none" },
});
