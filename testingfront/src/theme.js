import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[800], // Assuming you meant a darker shade for primary
        },
        secondary: {
            main: blueGrey[700],
        },
        // Define custom colors here if you need to use them across your app
        custom: {
            white: "#ffffff",
            midNightBlue: "#003366",
        }
    }
});
