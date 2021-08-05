import { createTheme } from "@material-ui/core";

const customTheme = createTheme({
    overrides: {
        MuiListItem: {
            root: {
                "&$selected": {
                    backgroundColor: "#3F0E40",
                    color: "white",
                },
                "&$selected:hover": {
                    backgroundColor: "#3F0E40",
                    color: "white",
                },
                "&:hover": {
                    color: "black",
                },
            },
        },
    },
    palette: {
        primary: {
            main: "#3F0E40",
        },
    },
});

export default customTheme;
