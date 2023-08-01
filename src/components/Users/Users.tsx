import React from "react";
import {UserType} from "../../redux/usersReducer";
import s from "./Users.module.css";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";

type UsersType = {
    users: UserType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
    followingInProgress: Array<number>
}

const Users = (props: UsersType) => {

    return <div className={s.usersContainer}>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} portionSize={10}/>
        <div className={s.usersContainer}>
            {props.users.map((u, index) =>
                <User key={index} user={u} unFollow={props.unFollow} followingInProgress={props.followingInProgress}
                      follow={props.follow}/>)}
        </div>
    </div>

}

export default Users