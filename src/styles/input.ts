import {palette} from './Palette'

export const inputss={
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
          padding: "8px 16px",
          borderRadius: 4,
          borderColor: palette.greyScale.light,
          borderWidth: 200,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
        },
      },
    },
    
  
}