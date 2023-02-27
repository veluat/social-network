import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import FriendsBar from "./FriendsBar/FriendsBar";

const Navbar = () => {
    /*let friendsBarElement = sidebar.sidebar.map(el => <FriendsBar key={el.id} id={el.id} name={el.name} ava={el.ava}/>)*/
    return (
        <nav className={s.nav}>
            <div className={s.navbar}>
                    <div className={s.item}>
                        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                    </div>
                </div>
                <div className={s.friends}>
                    <div><span className={s.text}>My friends:</span></div>
                    <div className={s.friendsBlock}>{/*{friendsBarElement}*/}</div>
                </div>
        </nav>
    );
};

export default Navbar;