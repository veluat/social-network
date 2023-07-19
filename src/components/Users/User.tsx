import React from "react";
import userAvatar from '../../assets/images/user-avatar-icon.png'
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";

type UserType = {
    user: any
    follow: (id: number) => void
    unFollow: (id: number) => void
    key: number
    followingInProgress: Array<number>
}

const User = (props: UserType) => {

    return (
        <div key={props.key}>
                <span className={s.usersPhoto}>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userAvatar}
                             alt={'user photo'}/>
                            </NavLink>
                    </div>
                    <div>
                        {props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.unFollow(props.user.id)
                                      }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.follow(props.user.id)
                                      }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
            <span>
                     <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </span>
        </div>
    )
}

export default User;