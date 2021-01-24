import React from 'react';
import {Drawer,Hidden} from "@material-ui/core";
import {useStyles} from "./side-bar.styles";
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../../redux/menu/menu.actions";
import SideBarContent from "./content";

const SideBar = () => {
    const showMenu = useSelector(({Menu}) => Menu.showMenu);
    const dispatch = useDispatch();
    const styles = useStyles();

    const handleDrawerToggle = () => {
        dispatch(toggleMenu());
    };

    return (
        <nav className={styles.drawer} aria-label="sidebar">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    open={showMenu}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: styles.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true
                    }}
                >
                    <SideBarContent/>
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: styles.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <SideBarContent/>
                </Drawer>
            </Hidden>
        </nav>
    )
};

export default SideBar;
