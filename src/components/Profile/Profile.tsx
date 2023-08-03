import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";

export type ProfileProps = {
    profile: string | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: () => void
}

const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}  savePhoto={props.savePhoto} isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;