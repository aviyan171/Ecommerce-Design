import React from "react";
import ReactDOM from "react-dom/client";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./pages/AdminPages/Drawer";

import "./index.css";
import App from "./App";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Sidebar />
        <App />
      </BrowserRouter>
    </ThemeProvider>
    <CssBaseline />
  </React.StrictMode>
);
