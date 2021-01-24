import React, {useState} from 'react'
import {Grid,Typography} from "@material-ui/core";

import AuthForm from "../../components/auth/auth-form";
import AuthInput from "../../components/auth/auth-input";
import {useStyles} from "./login-page.styles";
import AuthButton from "../../components/auth/auth-button/auth-button";
import {Link} from "react-router-dom";
import {loginUser} from "../../redux/auth/auth.actions";
import {useDispatch} from "react-redux";


const LoginPage = () => {
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    const dispatch = useDispatch();
    const styles = useStyles();

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(loginUser({name,password}));
    };

    return (
        <Grid className={styles.root}>
            <Grid className={styles.title}>
                <Typography variant={'h5'}>Login as a student</Typography>
            </Grid>
            <AuthForm onSubmit={handleLogin}>
                <AuthInput label={'Name'} onChange={(e) => setName(e.target.value)} />
                <AuthInput label={'Password'} type="password" onChange={(e) => setPassword(e.target.value)}/>
                <AuthButton type='submit' title={'Login'}/>
            </AuthForm>
            <Grid className={styles.details}>
                <Typography className={styles.detailsText}>Don`t have an account?</Typography>
                <Link className={styles.detailsLink} to={'/register'}>Sign up</Link>
            </Grid>
        </Grid>
    )
};

export default LoginPage;
