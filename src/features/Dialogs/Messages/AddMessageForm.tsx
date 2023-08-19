import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import {FormTextarea} from "../../../common/components/FormTextarea/FormTextarea";
import s from "./Messages.module.scss"


export const AddMessageForm = (props: AddMessageFormType) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IMessageFormInput>();
    const onSubmit: SubmitHandler<IMessageFormInput> = data => {
        props.addMessage(data)
        reset()
    };

    return <form onSubmit={handleSubmit(onSubmit)} className={s.addMessageForm}>

        <div className={s.messageTextarea}>
            <FormTextarea id="message"
                          name="message"
                          label="Write a message..."
                          rows={3}
                          register={register}
                          validationSchema={{
                              required: true
                          }}
            />
        </div>
        <div>
            <button className={s.sendMessage}>Send</button>
        </div>
    </form>
}

export type IMessageFormInput = {
    message: string
}

type AddMessageFormType = {
    addMessage: (message: IMessageFormInput) => void
}