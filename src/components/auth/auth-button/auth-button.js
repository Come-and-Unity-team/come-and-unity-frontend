import React from 'react'
import {Button,Typography} from "@material-ui/core";
import {useStyles} from "./auth-button.styles";

const AuthButton = ({type,title}) => {

    const styles = useStyles();

    return (
        <Button
            type={type}
            className={styles.root}
            variant='contained'
        >
            <Typography className={styles.text} >{title}</Typography>
        </Button>
    )
};

export default AuthButton;
