import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette:{
    mode: 'light',
    primary: {
      main: '#1D3B86'
    },
    secondary: {
      main: '#6CC4C4'
    },
    error: {
      main: '#D32F2F'
    }
  }
});
