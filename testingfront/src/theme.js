import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff' // white color
        },
        secondary: {
            main: grey[300], // light grey color
            midNightBlue: "#003366"
        }
    }
});
