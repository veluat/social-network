import React from 'react';
import styles from './Profile.module.scss'
import {AppPage} from "../../app/app-reducer";
import {UserType} from "../Users/users-reducer";
import {ProfileType} from "../../api/api";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {NewsSection} from "./NewsSection/NewsSection";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.profileContainer}>
            <ProfileInfo setIsEdit={props.setIsEdit} isEdit={props.isEdit} saveProfile={props.saveProfile}
                         profileEditStatus={props.profileEditStatus} savePhoto={props.savePhoto} isOwner={props.isOwner}
                         profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                         followingInProgress={props.followingInProgress}
                         follow={props.follow} unFollow={props.unFollow} users={props.users} userId={props.userId}
            />
            <MyPostsContainer/>
            <NewsSection setPage={props.setPage}/>
        </div>
    )
}

export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    profileEditStatus: string | null
    isEdit: boolean
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: any) => void
    setIsEdit: (isEdit: boolean) => void
    setPage: (page: AppPage) => void
    followingInProgress: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    users: UserType[]
    userId: string
}



