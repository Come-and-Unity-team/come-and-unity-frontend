import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom";
import {Grid,Divider,List,ListItem,ListItemIcon,ListItemText,Avatar,Typography} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Logo from '../../logo';
import {useStyles} from "./side-bar-content.styles";
import {router, sideBar} from "../../../configs";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../redux/auth/auth.actions";
import userPhoto from './userPhoto.jpg';


const SideBarContent = () => {

    const dispatch = useDispatch();
    const styles = useStyles();

    const handleLogout = (e) => {
        dispatch(logoutUser());
    }
    const items = sideBar.items.map(
        ({text,Icon,path},key) => (
            path &&
            <ListItem
                key={key}
                component={NavLink}
                exact
                to={path}
                activeClassName={styles.listItemActive}
                className={styles.listItem}
            >
                <ListItemIcon>
                    <Icon className={styles.light}/>
                </ListItemIcon>
                <ListItemText>
                    {text}
                </ListItemText>
            </ListItem>
    ));

    return (
      <Grid className={styles.root}>
          <Grid>
              <Logo color='secondary'/>
              <Divider classes={{root: styles.divider}} />
              <List component="nav" aria-label="main mailbox folders">
                  {items}
              </List>
          </Grid>
          <Grid>
              <Grid
                  className={styles.userPanel}
                  component={NavLink}
                  to={router.pathToProfilePage}
                  activeClassName={styles.userPanelActive}
              >
                  <Avatar src={userPhoto}>I</Avatar>
                  <Grid className={styles.userInfo}>
                      <Typography className={styles.fullName}>Ivan Ivanov</Typography>
                      <Typography className={styles.userStatus}>Student</Typography>
                  </Grid>
              </Grid>
              <Grid>
                  <ListItem
                      className={styles.listItem}
                      button
                  >
                      <ListItemIcon>
                          <ExitToAppIcon className={styles.light}/>
                      </ListItemIcon>
                      <ListItemText onClick={handleLogout}>
                          Logout
                      </ListItemText>
                  </ListItem>
              </Grid>
          </Grid>
      </Grid>
    );
};

export default SideBarContent;
