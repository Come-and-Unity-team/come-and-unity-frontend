import React from 'react';
import {Grid,Typography} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import {useStyles} from "./person.style";


const Person = (props) => {
    
    const {firstAndLastName, group, photo } = props;
    const styles = useStyles();
    return (
        <div>
            <Grid className={styles.row}>
                <Grid className={styles.root}>
                    <Avatar className={styles.img} src={photo} />
                    <Grid className={styles.info}>
                        <Typography variant={'h5'}>{firstAndLastName}</Typography>
                        <Typography variant={'p'}>{group}</Typography> 
                    </Grid>
                </Grid>

                {/* <Grid className={styles.root}>
                    <Avatar className={styles.img} src={per2} />
                    <Grid className={styles.info}>
                        <Typography variant={'h5'}>Oleksyi Donec</Typography>
                        <Typography variant={'p'}>PMA-32</Typography>
                    </Grid>
                </Grid>
                <Grid className={styles.root}>
                    <Avatar className={styles.img} src={per3} />
                    <Grid className={styles.info}>
                        <Typography variant={'h5'}>Anakin Skywalker</Typography>
                        <Typography variant={'p'}>PMA-32</Typography>
                    </Grid> 
                    </Grid> */}

            </Grid>
            
        </div>
    )
};


export default Person;