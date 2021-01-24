import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 150,
        '& > *': {
            width: '40%',
            maxWidth: 400
        }
    },
    title: {
        margin: '20px 0',
        textAlign: 'center',
        '& > *': {
            fontWeight: 700
        }
    },
    details: {
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsText: {
        fontSize: 16,
        marginRight: 6,
    },
    detailsLink: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#164195',
        textDecoration: 'none',
        '&:hover': {
            color: 'blue',
            textDecoration: 'none',
        },
    }

}));
