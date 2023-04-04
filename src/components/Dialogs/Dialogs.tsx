import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogPageType} from "../../redux/dialogsReducer";
import AddMessageForm, {AddMessageFormDataType} from "./AddMessageForm/AddMessageForm";

type DialogsType = {
    dialogsPage: DialogPageType
    sendMessage: (values: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsType) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(el =>
        <DialogItem key={el.id} id={el.id} name={el.name} ava={el.ava}/>)
    let messagesElements = state.messages.map(el =>
        <Messages key={el.id} id={el.id} message={el.message}/>)

    const addNewMessage = (values: AddMessageFormDataType) => {
        props.sendMessage(values.newMessageText)
    }

    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>

        </div>
    );
};


export default Dialogs;