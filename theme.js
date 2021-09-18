
import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#5F2A87',
    },
    secondary: {
      main: '#7A4B91',
    },
    error: {
      main: '#B14427',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;