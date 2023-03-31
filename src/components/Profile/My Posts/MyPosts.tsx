import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsType = {
    posts: PostType[]
    addPost: (values: string) => void
}

const MyPosts = (props: MyPostsType) => {
    const postsElements = props.posts.map(el =>
        <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)

    const addNewPost = (values: AddPostFormFormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <AddPostFormFormRedux onSubmit={addNewPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

type AddPostFormFormDataType = {
    newPostText: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormFormDataType>> = (props) => {
    return (
        <div className={s.newPostArea}>
            <form onSubmit={props.handleSubmit} className={s.textAndButton}>
                <Field component='textarea' name='newPostText' placeholder='Enter your text'/>

                <button>Add post</button>
            </form>
        </div>
    )
}

const AddPostFormFormRedux = reduxForm<AddPostFormFormDataType>({form: 'postsAddPostForm'})(AddPostForm)

export default MyPosts;

