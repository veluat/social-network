import React from 'react';
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType, RootStateType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>

    );
}

export default Profile;