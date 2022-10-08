import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post";

type PostsPropsType = {
    posts: PostsType[]
}

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

const MyPosts = (props: PostsPropsType) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>


    );
}


export default MyPosts;