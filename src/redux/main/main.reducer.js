import {SET_LOADING} from "./main.types";

export const initialState = {
    isLoading: false
};

const mainReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default mainReducer;
