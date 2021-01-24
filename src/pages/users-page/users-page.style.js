import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>({
    root: {
        marginTop: 60,
        marginLeft:30,
        marginRight:30
    },
    appointment: {
        backgroundColor: 'red'
    },
    title:{
        fontSize:'20px',
        width:'auto',
        display:'flex',
        flexDirection:'row',
        flexFlow:'2',
        justifyContent:'space-between'
    },
    description:{
        marginLeft:50,
        fontSize:'15px',
        color:'grey',
        width:'auto',
        display:'flex',
        flexDirection:'row',
        flexFlow:'2',
        justifyContent:'flex-start'

     },
    media: {
        marginTop:10,
        width:'200px',
        height:'200px'
    },
    h5: {
        fontWeight: 'bold',
        color:'grey'
    },
    h4: {
        fontWeight:'10px',
        color:'grey'
    },
    h6: {
        fontSize:'8px',
        color:'grey'
    },
    info: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
        //marginTop: 30
    },
    awards: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    }
}));