import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import styles from './AddPostForm.module.scss'
import {FormTextarea} from "../../../../common/components/FormTextarea/FormTextarea";

export const AddPostForm = (props: AddPostFormType) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<IPostFormInput>();
    const onSubmit: SubmitHandler<IPostFormInput> = data => {
        props.addPost(data)
        reset()

    };
    return <form onSubmit={handleSubmit(onSubmit)} className={styles.addPostForm}>
        <div className={styles.messageTextarea}>
            <FormTextarea id="post"
                          name="post"
                          label="Write youre post..."
                          rows={3}
                          register={register}
                          validationSchema={{
                              required: true
                          }}
            />
        </div>
        <div>
            <button className={styles.sendPost}>Publish</button>
        </div>
    </form>
}

export type IPostFormInput = {
    post: string
}

type AddPostFormType = {
    addPost: (post: IPostFormInput) => void
}

