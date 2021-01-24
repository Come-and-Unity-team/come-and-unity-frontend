import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {Grid,IconButton} from "@material-ui/core";
import {useStyles} from "./main-bar.styles";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../../redux/menu/menu.actions";

const MainBar = ({children}) => {

    const styles = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleMenu());
    };

    return (
        <Grid className={styles.root}>
            <Grid className={styles.menuPanel}>
                <IconButton className={styles.menuButton} onClick={handleClick}>
                    <MenuIcon color='secondary'/>
                </IconButton>
            </Grid>
            <Grid className={styles.pageContainer}>
            {children}
            </Grid>
        </Grid>
    )
};

export default MainBar;
