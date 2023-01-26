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

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    save: true;
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
      variants: [
        {
          props: { variant: "save" },
          style: {
            height: "40px",
            width: "72px",
            color: "#FFFFFF",
            textTransform: "none",
            padding: "8px 16px",
            backgroundColor: "#2A3969",
            opacity: 0.7,
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        elevation: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiNativeSelect: {
      styleOverrides: {
        standard: {
          height: 44,
          backgroundColor: "#F7F8FA",
          border: "none",
          fontFamily: "poppins",
          fontSize: "12px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          border: "1px solid #B3B3B3",
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            fontSize: "16px",
            fontWeight: 600,
          },
          "& .MuiTableCell-body": {
            fontSize: "13px",
          },
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
