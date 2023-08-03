import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import background from './Landscape.jpg'
import Preloader from "../../common/Preloader/Preloader";
import userAvatar from '../../../assets/images/user-avatar-icon.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export type PropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement & EventTarget>) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            {/*<div>
                <img className={s.backgroundImg}
                     src={background}
                     alt='background img'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userAvatar} alt={"profile photo"}
                     className={userAvatar ? s.avatar : ''}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;