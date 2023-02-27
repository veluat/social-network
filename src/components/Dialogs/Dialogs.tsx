import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogPageType} from "../../redux/dialogsReducer";

type DialogsType = {
    dialogsPage: DialogPageType
    updateMessageText: (text: string) => void
    sendMessage: () => void
}

const Dialogs = (props: DialogsType) => {
    let state = props.dialogsPage;
    const sendMessage = () => props.sendMessage()

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessageText(e.currentTarget.value)
    }

    let dialogsElements = state.dialogs.map(el => <DialogItem key={el.id}
                    id={el.id}
                    name={el.name}
                    ava={el.ava}/>)
    let messagesElements = state.messages.map(el => <Messages key={el.id}
                  id={el.id}
                  message={el.message}/>)

    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.textAndButton}>
                <textarea onChange={onMessageChange}
                          value={state.newMessageText}
                          placeholder={'Enter your text'}>
                </textarea>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;