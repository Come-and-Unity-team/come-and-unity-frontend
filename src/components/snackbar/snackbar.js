import React, { useState }from 'react';
import Snackbar from '@material-ui/core/Snackbar';
//import Button from '@material-ui/core/Button';
//import SnackbarContent from '@material-ui/core/SnackbarContent';
//import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import {useStyles} from './snackbar-style';
import {useSelector, useDispatch} from 'react-redux';
import { closeSnackbar } from '../../redux/menu/menu.actions';


export default function SimpleSnackBar () {
   
    const {open, message} = useSelector(({Auth})=> ({
        message: Auth.message,
        open: Auth.open
    }));
    const dispatch = useDispatch();

    
    
    const handleClose =(event, reason) => {
        if (reason === 'clickaway') {
            return;
          }
      
          dispatch(closeSnackbar());
    } 

    return (
       
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={message}
                action = {
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }>

            </Snackbar>
        </div>
    )
}