import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App.tsx";
import theme from "./theme";
import "./index.css";

const muiCache = createCache({
  key: "mui",
  prepend: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
