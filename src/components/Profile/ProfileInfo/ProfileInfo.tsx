import React from 'react';
import s from './ProfileInfo.module.css'
import background from './Landscape.jpg'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export type PropsType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.backgroundImg}
                     src={background}
                     alt='background img'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );};

export default ProfileInfo;