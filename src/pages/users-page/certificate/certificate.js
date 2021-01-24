import React from 'react';
import {Grid,Typography} from "@material-ui/core";
import {useStyles} from "./certificate.style";
import Avatar from '@material-ui/core/Avatar';
import certificate from './certificate.png';
import certificate2 from './certificate2.png';

const Certificate = () => {

    const styles = useStyles();

    return (
        <div>
            <Grid className={styles.awards}>
                    <Typography variant={'h5'}>My course`s awards:</Typography>
            </Grid>
            <Grid className={styles.images}>
                <Avatar className={styles.certificate} src={certificate} variant={'square'}/>
                <Avatar className={styles.certificate} src={certificate2} variant={'square'}/>
            </Grid>
            
            </div>
    )
}

export default Certificate;