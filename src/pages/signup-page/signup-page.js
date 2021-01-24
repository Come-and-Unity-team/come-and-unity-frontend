import React, {useEffect, useState} from "react";
import {Grid, Typography} from "@material-ui/core";


import AuthForm from "../../components/auth/auth-form";
import AuthInput from "../../components/auth/auth-input";
import {useStyles} from "./signup-page.styles";
import AuthButton from "../../components/auth/auth-button/auth-button";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/auth/auth.actions";

const SignupPage = () => {
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [nickname,setNickname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const dispatch = useDispatch();
    const styles = useStyles();

    const handleRegister = (e) => {
        e.preventDefault();

        dispatch(registerUser({
            firstname,
            lastname,
            nickname,
            email,
            password
        }));
    };

    return (
        <Grid className={styles.root}>
            <Grid className={styles.title}>
                <Typography variant={'h5'}>Register a new student</Typography>
            </Grid>
            <AuthForm onSubmit={handleRegister}>
                <AuthInput label={'First name'} onChange={(e) => setFirstname(e.target.value)}/>
                <AuthInput label={'Last name'} onChange={(e) => setLastname(e.target.value)}/>
                <AuthInput label={'Nick name'} onChange={(e) => setNickname(e.target.value)}/>
                <AuthInput label={'e-mail'} onChange={(e) => setEmail(e.target.value)} type={'email'} minLength="7" maxLength="25"/>
                <AuthInput label={'Password'} onChange={(e) => setPassword(e.target.value)} type={'password'} minLength="6" maxLength="15"/>
                <AuthInput label={'Repeat password'} type={'password'} minLength="6" maxLength="15"/>
                <AuthButton type='submit' title={'Register'}/>
            </AuthForm>
            <Grid className={styles.details}>
                <Typography className={styles.detailsText}>Already have an account?</Typography>
                <Link className={styles.detailsLink} to={'/login'}>Sign in</Link>
            </Grid>
        </Grid>
    )

};

export default SignupPage;

