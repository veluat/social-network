import React, {ComponentType} from 'react';
import './App.module.scss';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {NewsContainer} from "../features/News/News";
import {UsersContainer} from "../features/Users/UsersContainer";
import HeaderContainer from "../features/Header/HeaderContainer";
import Login from "../features/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "./redux-store";
import {AppPage, initializeApp, setPage} from "./app-reducer";
import Preloader from "../common/components/Preloader/Preloader";
import {withSuspense} from "../common/hoc/withSuspense";
import styles from './App.module.scss'
import NotFound from "../common/components/NotFound/NotFound";

type MapDispatchToPropsType = {
    initializeApp: () => void
    setPage: (page: AppPage) => void
}
type MapStateToPropsType = {
    isInitialized: boolean
}

const DialogsContainer = React.lazy(() => import('../features/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('../features/Profile/ProfileContainer'))

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)


class App extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {


    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some error occurred")
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }


    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }


        const pathName = window.location.hash.slice(1) !== '/login' && window.location.hash.slice(1) !== '/404';

        return (
            <div>
                {pathName && <HeaderContainer/>}
                <div className={styles.appContainer}>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/login'}/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                        <Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <NewsContainer/>}/>
                        <Route path='/404' render={() => <NotFound/>}/>
                        <Route path='*' render={() => <Redirect to={'/404'}/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({isInitialized: state.app.isInitialized})

export const AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp, setPage}))(App)

