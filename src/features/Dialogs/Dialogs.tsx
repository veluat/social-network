import React, {useEffect} from 'react';
import styles from './Dialogs.module.scss'
import {DialogItem} from "./DialogItem/DialogItem";
import {CommonDialogsType} from "./DialogsContainer";
import userPhoto from "../../assets/images/avatar_empty.png";
import {Message} from "./Messages/Messages";
import {AddMessageForm} from "./Messages/AddMessageForm";

const Dialogs: React.FC<CommonDialogsType> = (props) => {
    const {dialogPage, addMessage} = props
    let DialogItems = dialogPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let Messages = dialogPage.messages.slice(1).map(message => <Message key={message.id} message={message.message}/>)

    useEffect(() => {
        props.setPage('dialogs')
    }, [])

    return (
        <div className={styles.dialogsContainer}>
            <div className={styles.dialogsItems}>
                {DialogItems}
            </div>
            <div className={styles.messagesContainer}>
                <div className={styles.messages}>
                    <div className={styles.message}>
                        <img src={userPhoto} alt="userPhoto" className={styles.userPhoto}/>
                        <span className={styles.friendMessageText}>{dialogPage.messages[0].message}</span>
                    </div>
                    {Messages}
                </div>
                <AddMessageForm addMessage={addMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;

