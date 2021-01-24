import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({

    awards: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    images: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    certificate:{
        width:250,
        height:200
    }
     
}));
