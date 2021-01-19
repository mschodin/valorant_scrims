import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#056839" // Dark Green
        },
        secondary: {
            main: "#8cc63f" // Light Green
        },
        background: {
            default: "#949494" // Dark Gray
        }
    },
    // fontFamily: "Roboto",
});

export default theme;