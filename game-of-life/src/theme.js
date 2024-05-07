import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#e53935',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h2: {
      fontSize: '2.2rem',
      color: '#333',
      fontWeight: 'bold',
      marginBottom: '0.5em',
    },
    h5: {
      fontSize: '1.5rem',
      color: '#555',
      fontWeight: '500',
    },
  },
});

export default theme;
