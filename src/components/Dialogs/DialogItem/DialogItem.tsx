import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.css'
import {DialogType} from "../../../redux/dialogsReducer";


const DialogItem = (props: DialogType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img src={props.ava} alt='avatar'/>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;