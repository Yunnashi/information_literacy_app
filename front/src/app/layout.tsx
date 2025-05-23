"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";
import AppBarComponent from "./components/AppBarComponent";

const theme = createTheme();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBarComponent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
