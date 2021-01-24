import React from 'react';
import {TextField} from "@material-ui/core";
import {useStyles} from "./auth-input.styles";

const AuthInput = ({label,...other}) => {

    const styles = useStyles();

    return (
        <TextField
            label={label}
            variant="outlined"
            className={styles.root}
            color="primary"
            {...other}
        />
    )
};

export default AuthInput;
