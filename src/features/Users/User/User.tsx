import {UserType} from "../users-reducer";
import React from "react";
import s from "../Users.module.scss";
import userPhoto from "../../../assets/images/avatar_empty.png";
import {NavLink} from "react-router-dom";
import styles from "./User.module.scss"
import {ViewProfile} from "../../../common/components/Buttons/Buttons";
import {AppPage} from "../../../app/app-reducer";
import {InteractUser} from "../../Profile/ProfileInfo/InteractUser/InteractUser";

export const User: React.FC<UserProps> = ({user, followingInProgress, follow, unFollow, setPage}) => {

    const onClickHandler = (page: AppPage) => {
        setPage && setPage(page)
    }

    return (
        <div key={user.id} className={styles.userContainer}>
            <div className={styles.userMainBox}>
                <div>
                    <NavLink to={'profile/' + user.id} onClick={() => onClickHandler('profile')}>
                        <img alt='photo'
                             src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div className={styles.userName}>
                    <h5>{user.name}</h5>
                    <div>{user.status}</div>
                </div>
            </div>
            <div className={styles.interactProfile}>
                <InteractUser user={user} followingInProgress={followingInProgress} follow={follow}
                              unFollow={unFollow} setPage={setPage}/>
            </div>

            <div className={styles.viewProfile}>
                <ViewProfile userId={user?.id} onClick={onClickHandler}/>
            </div>
        </div>)
}

export type UserProps = {
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    user: UserType
    setPage?: (page: AppPage) => void
}



