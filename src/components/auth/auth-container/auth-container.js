import React from 'react'
import {Grid} from '@material-ui/core'
import {useStyles} from "./auth-container.styles";

const AuthContainer = ({children}) =>{

    const styles = useStyles();

    return (
        <Grid className={styles.root}>
            {children}
        </Grid>
    );
};

export default AuthContainer;
