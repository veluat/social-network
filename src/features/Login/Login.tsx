import React from 'react';
import {connect} from "react-redux";
import {login} from "./auth-reducer";
import {AppStateType} from "../../app/redux-store";
import {Redirect} from "react-router-dom";
import {LoginForm} from "../../common/components/FormControls/LoginForm";
import s from './Login.module.scss'
import logo from "./../../assets/images/network.png"

const Login = (props: commonType) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={s.center}>
        <div className={s.loginContainer}>
            <div className={s.title}>
                <img src={logo} alt="logo" className={s.logo}/>
                <h1>Social Network</h1>
            </div>
            <div className={s.description}>
                <h1>Welcome</h1>
                <div className={s.line}></div>
                <h3>To log in get registered <a
                    href="https://social-network.samuraijs.com/signUp" className={s.apiLink}
                    target={'_blank'}>here</a>
                </h3>
                <h3>or use common test account credentials:</h3>
                <h3>Email: <b>free@samuraijs.com</b></h3>
                <h3> Password: <b>free</b></h3>
                <div className={s.line}></div>
            </div>
            <div className={s.loginForm}>
                <div className={s.signIn}>
                    <h2>Sign in</h2>
                </div>
                <LoginForm captchaUrl={props.captchaUrl} login={props.login} isSubmit={props.isSubmit}
                           errorMessage={props.errorMessage}/>
            </div>
        </div>
        </div>

        /*<div className={s.loginContainer}>
            <div className={s.descriptionBox}>
                <div className={s.title}>
                    <img src={logo} alt="logo" className={s.logo}/>
                    <h2>Welcome</h2>
                </div>
                <div className={s.description}>
                    <span>To log in get registered <a
                        href="https://social-network.samuraijs.com/signUp" className={s.apiLink} target={'_blank'}>here</a>
                    </span>
                    <span>or use common test account credentials:</span>
                    <span>Email: <b>free@samuraijs.com</b></span>
                    <span> Password: <b>free</b></span>
                </div>
            </div>
            <div className={s.loginForm}>
                <h3 className={s.loginFormTitle}>Sign in</h3>
                <LoginForm captchaUrl={props.captchaUrl} login={props.login} isSubmit={props.isSubmit}
                           errorMessage={props.errorMessage}/>
            </div>
        </div>*/
    );
};

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        isSubmit: state.auth.isSubmit,
        errorMessage: state.auth.errorMessage,
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login);

export type commonType = mapDispatchToProps & mapStateToProps

type mapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, captchaUrl: string | null) => void
}

type mapStateToProps = {
    isSubmit: boolean
    errorMessage: string
    isAuth?: boolean
    captchaUrl: string | null
}



