import React from 'react';
import s from './FriendsBar.module.css'
import {SidebarType} from "../../../index";


const FriendsBar = (props:SidebarType) => {
    return (
        <div className={s.sidebar}>
            <img src={props.ava} alt="avatar"/>
            <span>{props.name}</span>
        </div>
    );
};

export default FriendsBar;