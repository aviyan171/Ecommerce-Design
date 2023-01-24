import { createTheme } from "@mui/material/styles";
import { palette } from "./Palette";
import { customTypography } from "./typography";

declare module "@mui/material/styles" {
  interface Palette {
    greyScale: {
      main: string;
      light: string;
      lighter: string;
    };
  }
  interface PaletteOptions {
    greyScale: {
      main: string;
      light: string;
      lighter: string;
    };
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsVariantOverrides {
    dashed: true;
  }
  interface TextFieldPropsVariantOverridesOptions {
    dashed: true;
  }
}

export const theme = createTheme({
  palette,

  typography: customTypography,
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        contained: {
          marginLeft: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          fontWeight: 400,
          position: "relative",
          marginBottom: -13,
          marginLeft: -12,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
        input: {
          height: 40,
          backgroundColor: palette.greyScale.light,
          padding: "8px 16px",
          borderRadius: 4,
          borderColor: palette.greyScale.light,
          borderWidth: 200,
          "::placeholder": { fontSize: 12 },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#2A3969",
          textTransform: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: palette.greyScale.main,
    //     },
    //   },
    // },
  },
});
