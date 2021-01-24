import {makeStyles} from "@material-ui/core/styles";
import {sideBar} from "../../configs";

export const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${sideBar.width}px)`,
            marginLeft: sideBar.width,
        },
        display: 'flex',
        flexDirection: 'column'
    },
    menuButton: {
        width: 50,
        height: 50,
    },
    menuPanel: {
        margin: 5,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    pageContainer: {
        margin: 10
    }
}));
