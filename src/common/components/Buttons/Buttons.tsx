import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Buttons.module.scss"
import {UserProps} from "../../../features/Users/User/User";
import {AppPage} from "../../../app/app-reducer";
import {SvgSelector} from "../svgSelector/svgSelector";

export const Connect = ({onClick}: ConnectProps) => {
    return (
        <NavLink to={'/dialogs'} className={styles.connect} onClick={() => onClick('dialogs')}>
            Connect
        </NavLink>
    );
};

export const Follow = ({followingInProgress, user, follow}: FollowProps) => {
    return (
        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            follow(user.id)
        }} className={styles.follow}><SvgSelector svgName={'follow'}/>Follow</button>
    )
}

export const UnFollow = ({followingInProgress, user, unFollow}: UnFollowProps) => {
    return (
        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            unFollow(user.id)
        }} className={styles.follow}><SvgSelector svgName={'unFollow'}/>Unfollow</button>
    )
}


export const ViewProfile = ({userId, onClick}: ViewProfileProps) => {
    return (
        <NavLink to={'profile/' + userId} onClick={() => onClick('profile')}>
            <button className={styles.viewProfile}>View profile</button>
        </NavLink>
    )
}

type FollowProps = Omit<UserProps, 'unFollow' | 'setPage'>
type UnFollowProps = Omit<UserProps, 'follow' | 'setPage'>
type ViewProfileProps = { userId: number, onClick: (page: AppPage) => void }
type ConnectProps = { onClick: (page: AppPage) => void }