import React, {useState} from 'react';
import {Grid,Typography} from "@material-ui/core";
import {useStyles} from "./users-page.style";
import EditButton from "../../components/edit-button";
import AddButton from "../../components/add-button";
import Avatar from '@material-ui/core/Avatar';
//import example from './assets/example.png';
import userPhoto from "./assets/userPhoto.jpg";
import Information from './info/info';
import Details from './details/details';
import Certificate from './certificate/certificate';

const UserPage = () => {
    
    const [file, setFile] = useState("");

    const handleUpload = (event) => {
        setFile(event.target.files[0]);
    }
    const styles = useStyles();

    return (
        <div>
            <Grid className={styles.root}>
        
                <Grid className={styles.title}>
                    <Typography variant={'h4'}>Details</Typography>
                    <EditButton type='submit' title={'Edit'}/>
                </Grid>
                <Grid className={styles.description}>
                     <Avatar className={styles.media} src={userPhoto} />
                    <Information />
                </Grid>
                <Grid className={styles.info}>
                    <Details />
                    <Certificate />
                    
                     <AddButton type={'file'} title={'Add certificate'} onChange={handleUpload} />
                </Grid>
            </Grid>
        </div>
    )
}

export default UserPage;