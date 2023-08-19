import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {logout} from "../Login/auth-reducer";
import {AppStateType} from "../../app/redux-store";
import {Header} from "./Header";
import {compose} from "redux";
import {AppPage, AppStatus, setPage} from "../../app/app-reducer";

class HeaderContainer extends React.Component<propsType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        appStatus: state.app.appStatus,
        selectedPage: state.app.selectedPage
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {logout, setPage}))(HeaderContainer)

export type mapStateToProps = {
    login: string | null,
    isAuth: boolean
    appStatus: AppStatus
    selectedPage: AppPage

}

type mapDispatchToProps = {
    logout: () => void
    setPage: (page: AppPage) => void
}

export type propsType = mapStateToProps & mapDispatchToProps