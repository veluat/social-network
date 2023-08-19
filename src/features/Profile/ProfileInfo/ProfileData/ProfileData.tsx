import styles from "../ProfileInfo.module.scss";
import React from "react";
import {ProfileType} from "../../../../api/api";
import {Contact} from "../Contact/Contact";

export const ProfileData = ({profile, isOwner, setIsEdit}: ProfileDataProps) => {

    const aboutMeField = profile.aboutMe
    const lookingForAJobDescriptionField = profile.lookingForAJobDescription ? profile.lookingForAJobDescription : '...'

    const contacts = Object.keys(profile.contacts).map((contact) => {
        // @ts-ignore
        const contactsValue = profile.contacts[contact]
        if (contactsValue) {
            // @ts-ignore
            return <Contact key={contact} contactTitle={contact} contactValue={profile.contacts[contact]}/>
        }
    })

    return <div className={styles.profileDataContainer}>
        {Boolean(isOwner) && <div className={styles.settingButtons}>
            <button onClick={() => setIsEdit(true)} className={styles.settingButton}> Settings</button>
        </div>}
        <div className={styles.aboutMe}>
            <h3>About me:</h3><span>{aboutMeField}</span>
        </div>
        <div><b>Looking for a job
            description</b>: {lookingForAJobDescriptionField}
        </div>
        <div>{contacts}</div>
    </div>
}

export type ProfileDataProps = {
    profile: ProfileType
    isOwner: boolean
    setIsEdit: (boolean: boolean) => void
}