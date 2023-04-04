import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from "../Dialogs.module.css";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type AddMessageFormDataType = {
    newMessageText: string
}

const maxLength50 = maxLengthCreator(500)


 const AddMessageForm : React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) =>  {

    return (
        <form onSubmit={props.handleSubmit} className={s.textAndButton}>
            <Field component={Textarea} name='newMessageText'
                   validate={[required, maxLength50]}/>

            <button>Send</button>
        </form>
    )
}

export default reduxForm<AddMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)