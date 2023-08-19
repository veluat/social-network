import React, {ChangeEvent, useRef} from 'react';
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfilePropsType} from "../Profile";
import userPhoto from "../../../assets/images/avatar_empty.png";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import Preloader from "../../../common/components/Preloader/Preloader";
import styles from "./ProfileInfo.module.scss"
import {ProfileData} from "./ProfileData/ProfileData";
import {InteractUser} from "./InteractUser/InteractUser";
import {SvgSelector} from "../../../common/components/svgSelector/svgSelector";

export const ProfileInfo: React.FC<Omit<ProfilePropsType, 'setPage'>> = (props) => {
    const {
        isEdit,
        setIsEdit,
        profile,
        status,
        updateStatus,
        isOwner,
        savePhoto,
        profileEditStatus,
        saveProfile,
        followingInProgress,
        follow,
        unFollow,
        users,
        userId
    } = props

    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            savePhoto(file)
        }
    }

    if (!profile) {
        return <Preloader/>
    }

    let user = users.find(user => user.id === +userId)
    if (!user) {
        user = {
            id: 0,
            name: '',
            status: '',
            photos: {
                small: '',
                large: '',
            },
            followed: false
        }
    }

    return (
        <div className={styles.profileInfoContainer}>
            <div className={styles.mainProfileBox}>
                <img src={profile?.photos?.large ? profile.photos.large : userPhoto} alt={'photo'}
                     className={styles.profilePhoto}/>

                {Boolean(isOwner) && <div>
                    <button onClick={selectFileHandler} className={styles.uploadImage}><SvgSelector svgName={'photo'}/>
                    </button>
                    <input
                        style={{display: 'none'}}
                        ref={inputRef}
                        type="file"
                        onChange={uploadHandler}
                    />
                </div>}

                <h2 className={styles.fullName}>{profile?.fullName}</h2>
                <ProfileStatusWithHooks isOwner={isOwner} status={status} updateStatus={updateStatus}/>
                {!isOwner &&
                    <div className={styles.interactProfile}>
                        <InteractUser followingInProgress={followingInProgress} follow={follow}
                                      unFollow={unFollow}
                                      user={user}/>
                    </div>}
            </div>
            <div className={styles.restProfileInformation}>{isEdit ?
                <ProfileDataForm saveProfile={saveProfile} profileEditStatus={profileEditStatus} profile={profile}
                                 isOwner={isOwner} setIsEdit={setIsEdit}/> :
                <ProfileData profile={profile} isOwner={isOwner} setIsEdit={setIsEdit}/>}</div>
        </div>
    )
}






