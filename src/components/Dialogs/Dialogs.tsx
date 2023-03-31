import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {DialogPageType} from "../../redux/dialogsReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>

        </div>
    );
};

type AddMessageFormDataType = {
    newMessageText: string
}

const AddMessageForm : React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) =>  {
    return (
        <form onSubmit={props.handleSubmit} className={s.textAndButton}>
            <Field component='textarea' name='newMessageText' placeholder='Enter your message'/>

            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;