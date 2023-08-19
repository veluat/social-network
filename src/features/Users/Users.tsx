import {UserType} from "./users-reducer";
import React from "react";
import {User} from "./User/User";
import {Paginator} from "../../common/components/Paginator/Paginator";
import styles from './Users.module.scss'
import {AppPage} from "../../app/app-reducer";

export const Users: React.FC<UsersType> =
    ({
         totalUsersCounter,
         pageSize,
         currentPage,
         onPageChanged,
         users,
         ...props
     }) => {
        return (
            <div className={styles.userPage}>
                <div className={styles.pagination}>
                    <Paginator pageSize={pageSize} totalUsersCounter={totalUsersCounter} currentPage={currentPage}
                               onPageChanged={onPageChanged}/>
                </div>
                <div className={styles.usersContainer}>{users.map(u =>
                    <User user={u}
                          followingInProgress={props.followingInProgress}
                          follow={props.follow}
                          unFollow={props.unFollow} key={u.id}
                          setPage={props.setPage}/>)}</div>
            </div>
        );
    }

export type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCounter: number
    currentPage: number
    onPageChanged: (p: number) => void
    followingInProgress: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setPage: (page: AppPage) => void
}