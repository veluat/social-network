import React from 'react';
import s from './Header.module.css'
import logo from './logo.png'
import {NavLink} from "react-router-dom";

type headerPropsType = {
    isAuth: boolean,
    login: string | null
}

const Header = (props: headerPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt='logo'/>
                <div className={s.logoText}>Social Network Samurai Way</div>
            </div>
            <div>
                <div className={s.loginBlock}>{props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}</div>
            </div>
        </header>
    );
};

export default Header;