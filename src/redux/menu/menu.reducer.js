import {TOGGLE_MENU} from "./menu.types";

const initialState = {
    showMenu: false
};

const menuReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_MENU:
            return {
                ...state,
                showMenu: !state.showMenu
            };
        default:
            return state
    }
};

export default menuReducer;
