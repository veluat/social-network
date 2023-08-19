import React from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import {MyPostsCommonType} from "./MyPostsContainer";
import {AddPostForm} from "./Post/AddPostForm";

class MyPosts extends React.Component<MyPostsCommonType> {

    shouldComponentUpdate(nextProps: Readonly<MyPostsCommonType>, nextState: Readonly<{}>): boolean {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        const {profilePage, auth, addPost, deletePost} = this.props

        const isOwner = profilePage?.profile?.userId === auth.id

        const postElements = profilePage.posts.map(post =>
            <Post key={post.id} message={post.message}
                  image={profilePage.profile?.photos.small}
                  name={profilePage.profile?.fullName}
                  deletePost={deletePost}
                  likes={post.likes}
                  id={post.id}
            />)

        return (
            <>
                <div className={s.postsBlock}>
                    {isOwner && <AddPostForm addPost={addPost}/>}
                    <div className={s.posts}>
                        {postElements}
                    </div>
                </div>
            </>
        );
    }
}

export default MyPosts;


