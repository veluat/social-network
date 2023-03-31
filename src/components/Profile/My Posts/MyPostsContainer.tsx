import React from 'react';
import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../../redux/redux-store";

/*const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                const addNewPostHandler = () => store.dispatch(addPostAC());
                const onPostChange = (text: string) => {
                    store.dispatch(updatePostTextAC(text))
                }
                return <MyPosts posts={state.profilePage.posts}
                                updatePostText={onPostChange}
                                addPost={addNewPostHandler}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );
};*/

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}
/*let mapDispatchToProps = (dispatch: (action: ActionsType) =>  void) => {
    return {
        addPost: () => dispatch(addPost()),
        updatePostText: (text: string) => {dispatch(updatePostText(text))
        }
    }
}*/

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;