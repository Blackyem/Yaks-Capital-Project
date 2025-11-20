// app/theme/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },

palette: {
  mode: "light",

  primary: {
    main: "#7f0000",       // Renaissance deep red
    light: "#a30000",
    dark: "#4c0000",
    contrastText: "#ffffff",
  },

  secondary: {
    main: "#222222",       // Dark neutral gray
  },

  text: {
    primary: "#222222",    // Default text color
    secondary: "#555555",  // Slightly lighter gray
  },

  background: {
    default: "#ffffff",
    paper: "#ffffff",
  },

  divider: "#dddddd",      // Thin line color for tables, borders
},


  // ↓ Your existing component overrides stay here
  components: {
    MuiPopover: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
    MuiModal: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
  },
});

export default theme;
