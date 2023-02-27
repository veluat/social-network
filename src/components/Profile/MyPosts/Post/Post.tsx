import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/traditiona-japanese-man-icon.png' alt='avatar'/>
            {props.message}
            <div>
                <span>Likes: </span> {props.likesCount}
            </div>
        </div>
    );
}


export default Post;