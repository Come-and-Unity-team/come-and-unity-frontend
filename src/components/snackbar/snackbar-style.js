import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        display:'flex',
        flexDirection:'row-reverse',
        justifyContent:'flex-start',
        width:'25%',
        height:'15%',
        backgroundColor:'red'
    },
    message: {
        display:'flex',
        alignItems:'center'
    }
}))