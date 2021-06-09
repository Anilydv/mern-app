import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#173e43",
            light: "#3fb0ac",
            dark: "#dddfd4",
        },
        secondary: {
            main: "#ff9100",
            light: "#00e676",
            dark: "#0091ea",
        },
    },
});

export default theme;
