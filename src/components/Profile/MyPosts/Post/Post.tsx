import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.icon-icons.com/icons2/1371/PNG/512/traditionajapaneseman_90816.png' alt='avatar'/>
            {props.message}
            <div>
                <span>Likes: </span> {props.likesCount}
            </div>
        </div>
    );
}


export default Post;