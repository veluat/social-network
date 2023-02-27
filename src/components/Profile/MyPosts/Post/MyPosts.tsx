import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post";
import {type} from "os";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";

type PostsPropsType = {
    posts: PostsType[]
    dispatch: (()=>{type: string})
    newPostText: string

}

type PostsType = {
    id: number,
    message: string,
    likesCount: number

}

const MyPosts = (props: PostsPropsType) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();



    let onAddPost = () => {

            props.addPost();

    };

    let onPostChange = () => {
           let text = newPostElement.current.value;
            props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>


    );
}


export default MyPosts;