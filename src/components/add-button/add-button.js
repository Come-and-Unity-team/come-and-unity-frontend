import React from 'react';
import {Button, Typography} from "@material-ui/core";
import {useStyles} from "./add-button.style";

const AddButton = (props) => {

    const {title, type} = props;
    const styles = useStyles();

    return (
        <Button 
            type={props.type}
            className={styles.root}
            variant='contained'
        >
            <Typography className={styles.text}>{props.title}</Typography>
        </Button>
    )
};

export default AddButton;
