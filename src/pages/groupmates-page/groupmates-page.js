import React from 'react';
import {Grid,Typography} from "@material-ui/core";
import {useStyles} from "./groupmates-page.style";
import Person from './person';
import per1 from './per1.jpg';
import per2 from './per2.png';
import per3 from './per3.png';

const GroupmatesPage = () => {

    const styles = useStyles();
    return (
        <div>
            <Grid className={styles.root}>
                <Typography variant={'h4'}>Groupmates</Typography>
            </Grid>
            <Grid className={styles.kernel}>
                <Person firstAndLastName="Petro Petrivskyi" group="PMA-02 " photo={per1} />
                <Person firstAndLastName="Oleksyi Stonks" group="PMA-02 " photo={per2} />
                <Person firstAndLastName="Anakin Skywalker" group="PMA-02 " photo={per3} />
            </Grid>

            <Grid className={styles.kernel}>
                <Person firstAndLastName="Petro Petrivskyi" group="PMA-01 " photo={per3} />
                <Person firstAndLastName="Oleksyi Stonks" group="PMA-01 " photo={per2} />
                <Person firstAndLastName="Anakin Skywalker" group="PMA-01 " photo={per1} />
            </Grid>

            <Grid className={styles.kernel}>
                <Person firstAndLastName="Petro Petrivskyi" group="PMA-03 " photo={per2} />
                <Person firstAndLastName="Oleksyi Stonks" group="PMA-03 " photo={per1} />
                <Person firstAndLastName="Anakin Skywalker" group="PMA-03 " photo={per3} />
            </Grid>
        </div>
    )
}

export default GroupmatesPage;