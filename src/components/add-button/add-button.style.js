import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgb(0,150,1)',
        height: 25,
        transition: theme.transitions.create('box-shadow', {
            duration: theme.transitions.duration.standard,
        })
    },
    text: {
        color: 'white',
        fontSize: 12
    }
}))