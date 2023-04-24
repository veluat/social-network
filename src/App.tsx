import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginPage";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

type MapDispatchPropsType = {
    initializeApp: () => void
}

type MapStatePropsType = {
    initialized: boolean
}

class App extends React.Component<MapStatePropsType & MapDispatchPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <BrowserRouter>
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs'
                                   render={() => <DialogsContainer/>}/>
                            <Route path='/users'
                                   render={() => <UsersContainer />}/>
                            <Route path='/login'
                                   render={() => <LoginPage/>}/>
                        </div>
                    </div>
                </BrowserRouter>
            );
        }
    }
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})

export default compose (
    withRouter,
    connect(MapStateToProps, {initializeApp}))(App);
