import React from 'react';
import s from './Header.module.css'
import logo from './logo.png'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt='logo'/>
                <div className={s.logoText}>Social Network Samurai Way</div>
            </div>
            <div>
                <div className={s.loginBlock}>
                    {props.isAuth ?
                        <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}</div>
            </div>
        </header>
    );
};

export default Header;