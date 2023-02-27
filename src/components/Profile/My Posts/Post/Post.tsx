import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/profileReducer";


const Post = (props: PostType) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg" alt="avatar"/>
                {props.message}
                <div>
                    <span>like</span>-{props.likesCount}
                </div>
            </div>
        </div>
    );
};

export default Post;