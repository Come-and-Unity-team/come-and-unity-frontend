import {CHECK_TOKEN, LOGIN_USER, REGISTER_USER, SET_AUTH, SET_AUTH_TOKEN, LOGOUT_USER} from "./auth.types";

export const registerUser = (data) => ({
    type: REGISTER_USER,
    payload: data
});

export const loginUser = (data) => ({
    type: LOGIN_USER,
    payload: data
});

export const setAuth = (state) => ({
   type: SET_AUTH,
   payload: state
});

export const setAuthToken = (token) => ({
    type: SET_AUTH_TOKEN,
    payload: token
});

export const checkToken = () => ({
    type: CHECK_TOKEN
});

export const logoutUser = () => ({
    type:LOGOUT_USER
});

