import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00695c"// blueish
        },
        secondary: {
            main: "#aed581" // greenish
        },
        background: {
            default: "floralwhite"
        }
    },
    fontFamily: "Roboto",
});

export default theme;