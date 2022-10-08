import React from 'react';
import s from './../Dialogs.module.css';
import {MessagesType} from "../../../redux/state";

type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}



