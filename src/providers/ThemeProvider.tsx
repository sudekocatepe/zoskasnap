// src/components/CustomThemeProvider.tsx

"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "../styles/theme";

// Define the shape of the theme context
interface ThemeContextType {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

// Create the Theme context with default values
const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  isDarkMode: false,
});

// Custom hook to access the theme context
export const useTheme = () => React.useContext(ThemeContext);

// CustomThemeProvider component to wrap the application in the theme provider
const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Check for theme preference from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Switch between light and dark themes
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
