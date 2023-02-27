import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";

type MyPostsType = {
    posts: PostType[]
    updatePostText: (test:string)=>void
    addPost: ()=>void
    newPostText: string
}

const MyPosts = (props: MyPostsType) => {
    const postsElements = props.posts.map(el =>
        <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)

    const addNewPostHandler = () => props.addPost()
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div className={s.newPostArea}>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                    <button onClick={addNewPostHandler}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;