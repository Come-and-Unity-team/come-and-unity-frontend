import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(270deg, #8743FF 0%, #4136F1 100%)',
        height: 50,
        transition: theme.transitions.create('box-shadow', {
            duration: theme.transitions.duration.standard,
        })
    },
    text: {
        color: 'white',
        fontSize: 18
    }
}));
