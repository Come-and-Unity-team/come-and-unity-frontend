import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from "./details.style";
// import AddButton from "../../components/add-button";

const Details = () => {

    const styles = useStyles();
    return (
        <div>
            <Grid className={styles.info}>
                <Typography variant={'h5'}>Info about yourself:</Typography>
                <Typography variant={'p'}>Student, 20 y/o, faculty: Applied mathematics and Informatics</Typography>    
            </Grid>
            <Grid className={styles.location}>
                    <Typography variant={'h5'}>Location:</Typography>
                    <Typography variant={'p'}>Lviv, Ukraine</Typography>
                </Grid>
        </div>
    )
};

export default Details;