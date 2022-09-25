import React from 'react';
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

type ProfileType = {

}

const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>

    );
}

export default Profile;