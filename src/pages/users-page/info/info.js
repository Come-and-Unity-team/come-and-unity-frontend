import React from 'react';
import {Grid,Typography} from "@material-ui/core";
import {useStyles} from "./info.style";


const Information = () => {

    const styles = useStyles();

    return (
        <div>
            <Grid className={styles.root}>
                    <Typography variant={'h5'}>{}Ivan Ivanov</Typography>
                     <Typography variant={'p'}>Student</Typography>
                     <Typography variant={'h5'}>Group:</Typography>
                     <Typography variant={'p'}>PMA-32</Typography>
                     <Typography variant={'h5'}>University:</Typography>
                     <Typography variant={'p'}>Lviv National University</Typography>
            </Grid>
        </div>

    )
}

export default Information;