import {createMuiTheme} from "@material-ui/core";

const createTheme = () => {
    return createMuiTheme({
        palette: {
            background: {
                default: "white"
            },
            primary: {
                500: '#5e35b1'
            },
            secondary: {
                'A400': '#A73D4A'
            }
        },
        typography: {
            "fontFamily": ` "Poppins" ,"Roboto", "Helvetica", "Arial", sans-serif`,
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500
        }
    });
};

export default createTheme;
