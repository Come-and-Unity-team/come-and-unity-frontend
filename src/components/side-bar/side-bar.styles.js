import {makeStyles} from "@material-ui/core/styles";
import {sideBar} from "../../configs";

export const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: sideBar.width,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: sideBar.width,
        height: '100%',
        padding: 10,
        borderColor: 'white',
        background: 'linear-gradient(175.93deg, #A73D4A -10.23%, #D6C7DB 117.03%)'
    }
}));
