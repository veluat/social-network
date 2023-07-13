import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostsType = {
    posts: PostType[]
    addPost: (values: string) => void
}

const MyPosts = React.memo((props: MyPostsType) => {
    const postsElements = props.posts.map(el =>
        <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)

    const addNewPost = (values: AddNewPostFormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <AddNewPostFormRedux onSubmit={addNewPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
});

type AddNewPostFormDataType = {
    newPostText: string
}

const maxLength30 = maxLengthCreator(30)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
    return (
        <div className={s.newPostArea}>
            <form onSubmit={props.handleSubmit} className={s.textAndButton}>
                <Field component={Textarea} name='newPostText' validate={[required, maxLength30]}/>

                <button>Add post</button>
            </form>
        </div>
    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;

