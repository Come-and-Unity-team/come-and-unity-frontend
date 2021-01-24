import React from 'react'
import {Grid,Paper} from '@material-ui/core'
import {useStyles} from "./auth-form.styles";

const AuthForm = ({onSubmit,children}) => {

    const styles = useStyles();

    return (
        <Paper className={styles.root}>
            <form onSubmit={onSubmit}>
                <Grid className={styles.container}>
                {children}
                </Grid>
            </form>
        </Paper>
    )
};

export default AuthForm;
