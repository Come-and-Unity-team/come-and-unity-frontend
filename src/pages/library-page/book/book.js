import React from 'react';
import {Grid,Typography, Link} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import {useStyles} from "./book.style";
    
const Book = (props) => {

    const {photo, title, authors, redirect} = props;
    const styles = useStyles();
    return (
        <div>
            <Grid className={styles.row}>
                 <Grid className={styles.root}>
                    <Avatar className={styles.img} src={photo} variant={'square'}/>
                    <Grid className={styles.info}>
                        <Link variant={'h6'} onClick={() => window.location = redirect }>{title}</Link>
                        <Typography variant={'p'}>{authors}</Typography> 
                    </Grid>
                
                </Grid>
            </Grid>   
        </div>
    )
}

export default Book;
