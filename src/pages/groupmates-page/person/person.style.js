import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>({
    root: {
        
        marginLeft:30,
        marginRight:30,
        display:'flex',
        flexDirection:'row'
    },
    img: {
        marginTop: 40,
        // marginLeft:40,
        width:150,
        height:150
    },
    info: {
        marginTop: 40,
        marginLeft:20,
        display:'flex',
        flexDirection:'column',

    },
    row: {
        display:'flex',
        flexDirection:'row',
        
    }
}));