import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },
    divider: {
        backgroundColor: 'white'
    },
    light: {
        color: 'white',
    },
    listItem: {
        color: 'white',
        transition: 'background-color 0.5s',
        borderRadius: 3
    },
    listItemActive: {
        backgroundColor: 'rgba(167, 61, 74, 0.2);',
    },
    userPanel: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(167, 61, 74, 0.3);',
        borderRadius: 10,
        padding: 8,
        cursor: 'pointer',
        transition: 'background-color 0.5s',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: 'rgba(167, 61, 74, 0.5);'
        }
    },
    userPanelActive: {
        backgroundColor: 'rgba(167, 61, 74, 0.65);',
    },
    userInfo: {
        color: 'white',
        marginLeft: 20
    },
    userStatus: {
        fontSize: 8,
    }
}));
