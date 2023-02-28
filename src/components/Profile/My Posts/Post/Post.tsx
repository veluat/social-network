import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/profileReducer";
import userAvatarIcon from './user-avatar-icon.png'


const Post = (props: PostType) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src={userAvatarIcon} alt="avatar"/>
                {props.message}
                <div>
                    <span>like</span>-{props.likesCount}
                </div>
            </div>
        </div>
    );
};

export default Post;