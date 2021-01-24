import React from 'react';
import {Grid,Typography} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import {useStyles} from "./example.style";
import teacher from './teacher.png';
import example2 from './example2.jpg';


const Teacher = () => {
    
    const styles = useStyles();
    return (
        <div>
            <Grid className={styles.row}>
                <Grid className={styles.root}>
                <Avatar className={styles.img} src={teacher} />
                <Grid className={styles.info}>
                <Typography variant={'h5'}>Elon Musk</Typography>
                <Typography variant={'p'}>Lecturer</Typography>
            </Grid>
            </Grid>
            
            <Grid className={styles.root}>
                <Avatar className={styles.img} src={example2} />
                <Grid className={styles.info}>
                <Typography variant={'h5'}>Mark Zuckerberg</Typography>
                <Typography variant={'p'}>Lecturer</Typography>
            </Grid>
            </Grid>
            </Grid>
            
        </div>
    )
};


export default Teacher;