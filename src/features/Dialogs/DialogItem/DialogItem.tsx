import React from 'react';
import s from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";
import {DialogType} from "../dialogs-reducer";
import userPhoto from "../../../assets/images/avatar_empty.png";

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog}>
            <img src={userPhoto} alt="userPhoto" className={s.userPhoto}/>
            <NavLink to={path} className={s.nameLink}>{props.name}</NavLink>
        </div>
    )
}
type DialogItemPropsType = DialogType