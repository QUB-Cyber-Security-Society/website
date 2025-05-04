import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DC2148',
    },
    secondary: {
      main: '#212020',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: {
        color: '#9CA3AF'
    }
  },
});

export default theme;