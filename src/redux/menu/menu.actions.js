import {TOGGLE_MENU, SHOW_SNACKBAR, SET_SNACKBAR, CLOSE_SNACKBAR} from "./menu.types";

export const toggleMenu = () => ({
    type: TOGGLE_MENU
});

export const showSnackbar = (message) => ({
    type:SHOW_SNACKBAR,
    payload:message
});

export const setSnackbar = (message) => ({
    type:SET_SNACKBAR,
    payload:message
});

export const closeSnackbar = () => ({
    type:CLOSE_SNACKBAR
});
    