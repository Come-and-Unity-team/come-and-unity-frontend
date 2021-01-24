import React from 'react'
import {Box} from "@material-ui/core";
import blackLogo from '../../assets/img/black-logo.png'
import whiteLogo from '../../assets/img/white-logo.png'
import {useStyles} from "./logo.styles";

const Logo = ({color}) => {

    const styles = useStyles();

    return (
        <Box className={styles.root}>
            <img className={styles.image} src={color === 'primary' ? blackLogo : whiteLogo } alt={'logo'}/>
        </Box>
    )
};

Logo.defaultProps = {
    color: 'primary'
};

export default Logo;
