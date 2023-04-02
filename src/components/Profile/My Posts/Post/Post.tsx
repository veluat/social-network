import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/profileReducer";
import userAvatarIcon from './user-avatar-icon.png'


const Post = (props: PostType) => {
    return (
        <div className={s.posts}>
            <img src={userAvatarIcon} alt="avatar"/>
            <div className={s.item}>
                <div>{props.message}</div>
                <div><span>like</span>-{props.likesCount}</div>
            </div>
        </div>
    );
};

export default Post;