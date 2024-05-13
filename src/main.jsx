import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import UIStateProvider from "./providers/UIStateProvider.jsx";
import AuthUserProvider from "./providers/AuthUserProvider.jsx";
import AppThemeProvider from "./providers/AppThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppThemeProvider>
      <UIStateProvider>
        <AuthUserProvider>
          <App />
        </AuthUserProvider>
      </UIStateProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
