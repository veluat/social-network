import React, {ComponentType} from 'react';
import {addPost, deletePost, ProfileStateType} from "../profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../app/redux-store";
import {IPostFormInput} from "./Post/AddPostForm";
import {AuthStateType} from "../../Login/auth-reducer";
import {compose} from "redux";

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        auth: state.auth
    }
}

export const MyPostsContainer = compose<ComponentType>(connect(mapStateToProps, {addPost, deletePost}))(MyPosts)

type mapStateToPropsType = {
    profilePage: ProfileStateType
    auth: AuthStateType
}

type mapDispatchToProps = {
    addPost: (post: IPostFormInput) => void
    deletePost: (postId: string) => void
}

export type MyPostsCommonType = mapDispatchToProps & mapStateToPropsType

