import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import background from './Landscape.jpg'
import Preloader from "../../common/Preloader/Preloader";
import userAvatar from '../../../assets/images/user-avatar-icon.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export type ProfileInfoType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoType) {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userAvatar} alt={"profile photo"}
                     className={userAvatar ? s.avatar : ''}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;