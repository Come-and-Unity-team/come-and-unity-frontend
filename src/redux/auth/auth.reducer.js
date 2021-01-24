import { CLOSE_SNACKBAR, SET_SNACKBAR } from "../menu/menu.types";
import {SET_AUTH} from "./auth.types";

export const initialState = {
    isAuth: false,
    open: false,
    message: null
};

const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            };
        case SET_SNACKBAR:
            return {
                ...state,
                open: true,
                message: action.payload
            };
        case CLOSE_SNACKBAR:
            return {
                ...state,
                open:false,
                message: null
            }
        default:
            return state;
    }
};

export default authReducer;
