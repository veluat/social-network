import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://cdn.icon-icons.com/icons2/1371/PNG/512/traditionajapaneseman_90816.png'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}


export default Post;