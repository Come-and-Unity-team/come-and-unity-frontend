import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#fafafa',
        borderRadius: 15,
        padding: '25px 35px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: '15px 0'
        }
    }
}));
