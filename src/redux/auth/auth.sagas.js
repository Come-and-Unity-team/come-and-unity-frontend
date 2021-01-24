import {register,login} from "./auth.operations";
import { push } from 'connected-react-router';
import { call,put,takeEvery } from 'redux-saga/effects';
import {CHECK_TOKEN, LOGIN_USER, REGISTER_USER, LOGOUT_USER} from "./auth.types";
import { SHOW_SNACKBAR } from "../menu/menu.types";
import {getFromLocalStorage, setToLocalStorage, deleteFromLocalStorage} from "../../utils/local-storage";
import {setAuth} from "./auth.actions";
import {setLoading} from "../main/main.actions";
import { setSnackbar } from "../menu/menu.actions";

function* handleRegisterUser({payload}) {
    try {
        yield put(setLoading(true));
        yield call(register, payload);
        yield put(setLoading(false));
        yield put(push('/login'));
    }
    catch (e) {
        
        yield call(setSnackbar,'Credentials are invalid');
        
    }
}

function* handleLoginUser({payload}) {
    try {
        yield put(setLoading(true));
        const token = yield call(login, payload);
        setToLocalStorage('accessToken', token);
        yield put(setAuth(true));
        yield put(setLoading(false));
        yield put(push('/profile'));
    }
    catch(e) {
        console.log(e);
        yield call(setSnackbar,'Credentials are invalid');
    }
}

function* handleTokenCheck() {
    const token = getFromLocalStorage('accessToken');
    if (token) {
        yield put(setAuth(true));
    }
    else {
        setToLocalStorage('accessToken', null);
    }
}
function* logoutUserCheck () {
    //const token = deleteFromLocalStorage();
    try{
        yield put(setAuth(false));
        deleteFromLocalStorage();
        yield put(push('/login'));
    } catch (e) {}
        
}
function* handleShowSnackbar (payload) {
    yield put(setSnackbar(payload))
}


export default function* authSaga() {
    yield takeEvery(REGISTER_USER, handleRegisterUser);
    yield takeEvery(LOGIN_USER,handleLoginUser);
    yield takeEvery(CHECK_TOKEN,handleTokenCheck);
    yield takeEvery(LOGOUT_USER, logoutUserCheck);
    yield takeEvery(SHOW_SNACKBAR, handleShowSnackbar);
}

