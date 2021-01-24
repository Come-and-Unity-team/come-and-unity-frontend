import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Auth from './auth/auth.reducer';
import Menu from './menu/menu.reducer';
import Main from './main/main.reducer';

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        Menu,
        Auth,
        Main
    });
export default rootReducer;
