import React,{lazy, Suspense,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route,Switch,Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../redux/store';
import {router} from "../configs";
import Logo from '../components/logo';
import SideBar from "../components/side-bar";
import MainBar from "../components/main-bar";
import AuthContainer from "../components/auth/auth-container";
import {useSelector} from "react-redux";
import {checkToken} from "../redux/auth/auth.actions";
import Loading from "../components/loading";
import SimpleSnackBar from "../components/snackbar";

const Router = () => {
    const isAuth = useSelector(({Auth}) => Auth.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkToken());
    },[]);

    const LoginPage =  lazy(() =>import('../pages/login-page'));
    const SignupPage =  lazy(() =>import('../pages/signup-page'));

    const UserPage =  lazy(() =>import('../pages/users-page'));
    const TeacherPage =  lazy(() =>import('../pages/teachers-page'));
    const SchedulePage =  lazy(() =>import('../pages/schedule-page'));
    const LibraryPage = lazy(() =>import('../pages/library-page'));
    const GroupmatesPage = lazy(() =>import('../pages/groupmates-page'));

    if (!isAuth) {
        return (
            <Suspense fallback={<Loading/>}>
                <ConnectedRouter history={history}>
                    <Logo/>
                    <AuthContainer>
                        
                    <SimpleSnackBar />
                        <Switch>
                            <Route path={router.pathToLoginPage} exact component={LoginPage}/>
                            <Route path={router.pathToSignupPage} exact component={SignupPage}/>
                            <Redirect to={router.pathToLoginPage} />
                            
                        </Switch>
                    </AuthContainer>
                </ConnectedRouter>
            </Suspense>
        );
    }
    return (
        <Suspense fallback={<Loading/>}>
            <ConnectedRouter history={history}>
                <SideBar/>
                <MainBar>
                    <Switch>
                        <Route path={router.pathToSchedulePage} exact component={SchedulePage} />
                        <Route path={router.pathToTeachersPage} exact component={TeacherPage} />
                        <Route path={router.pathToProfilePage} exact component={UserPage}/>
                        <Route path={router.pathToLibraryPage} exact component={LibraryPage}/>
                        <Route path={router.pathToGroupmatesPage} exact component={GroupmatesPage}/>
                        <Redirect to={router.pathToProfilePage} />
                    </Switch>
                </MainBar>
            </ConnectedRouter>
        </Suspense>
    );
};

export default Router;
