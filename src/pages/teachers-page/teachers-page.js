import React from 'react';
import {Grid,Typography} from "@material-ui/core";
import {useStyles} from "./teachers-page.style";
import Teacher from './exmp/teacher';


const TeachersPage = () => {
    
    const styles = useStyles();
    return (
        <div>
            <Grid className={styles.root}>
                <Typography variant={'h4'}>Teachers</Typography>
            </Grid>

            <Grid>
                <Teacher />
                <Teacher />
                <Teacher /> 
            </Grid>
            
            
        </div>
    )
}

export default TeachersPage;