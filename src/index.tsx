// import { createRoot } from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
// import {
//   CssBaseline,
//   ThemeProvider,
//   createTheme,
//   StyledEngineProvider,
// } from "@mui/material";

// import "./StyleSheets/global.css";

// const muiTheme = createTheme();

// const container = document.getElementById("root");
// const root = createRoot(container!);

// root.render(
//   <BrowserRouter>
//     <StyledEngineProvider injectFirst>
//       <ThemeProvider theme={muiTheme}>
//         <CssBaseline />
//         <App />
//       </ThemeProvider>
//     </StyledEngineProvider>
//   </BrowserRouter>
// );

// reportWebVitals();



import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import "./StyleSheets/global.css";

const muiTheme = createTheme();

const container = document.getElementById("root");
const root = createRoot(container!);

// Determine the basename based on the environment
const basename = process.env.NODE_ENV === "development" ? "/" : "/japan-marketing-test";

root.render(
  <BrowserRouter basename={basename}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);

reportWebVitals();
