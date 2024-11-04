import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// import Roboto Font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, GlobalStyles } from "@mui/material";

const theme = createTheme({
 // your theme goes here...
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.5) 1px, transparent 0)",
            backgroundSize: "25px 25px",
          },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
