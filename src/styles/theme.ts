// src/styles/theme.ts

import { createTheme } from '@mui/material/styles';

// Base theme shared across modes
const baseTheme = {
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
};

// Light theme
const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: { main: '#ff5722' }, // Orange instead of red
    secondary: { main: '#4caf50' }, // Green instead of blue
    background: {
      default: '#e0f7fa', // Light cyan instead of light gray
      paper: '#ffffff', // White
    },
    text: {
      primary: '#212121', // Darker text instead of black
      secondary: '#757575', // Lighter gray for secondary text
    },
  },
});

// Dark theme
const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: { main: '#673ab7' }, // Purple instead of red
    secondary: { main: '#00bcd4' }, // Cyan instead of blue
    background: {
      default: '#303030', // Darker background
      paper: '#424242', // Darker paper
    },
    text: {
      primary: '#ffffff', // White text in dark mode
      secondary: '#b0bec5', // Light gray for secondary text
    },
  },
});

export { lightTheme, darkTheme };
