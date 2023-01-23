import { styled, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

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

export const CustomTypography = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
});
