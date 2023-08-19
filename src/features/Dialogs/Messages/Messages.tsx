import React from 'react';
import s from "./Messages.module.scss"
import {MessageType} from "../dialogs-reducer";
import userPhoto from "../../../assets/images/avatar_empty.png";

type MessagePropsType = MessageType

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>
            <img src={userPhoto} alt="userPhoto" className={s.userPhoto}/>
            <span className={s.messageText}>{props.message}</span>
        </div>
    )
}


