import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";

export type ProfileProps = {
    profile: string | null
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;