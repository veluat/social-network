import React from 'react';
import s from './ProfileInfo.module.css'
import background from './Landscape.jpg'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'

export type PropsType = {
    profile: any
    status: string
    updateStatus: string
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
                <ProfileStatus status={props.status}/>
            </div>
        </div>
    );};

export default ProfileInfo;