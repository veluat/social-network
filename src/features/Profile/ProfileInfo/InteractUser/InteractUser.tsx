import {UserProps} from "../../../Users/User/User";
import {AppPage} from "../../../../app/app-reducer";
import styles from "../ProfileInfo.module.scss";
import {Connect, Follow, UnFollow} from "../../../../common/components/Buttons/Buttons";
import React from "react";

export const InteractUser = ({user, followingInProgress, follow, unFollow, setPage}: UserProps) => {

    const onClickHandler = (page: AppPage) => {
        setPage && setPage(page)
    }

    return (
        <div
            className={styles.userButtons}
        >
            <Connect onClick={onClickHandler}/>
            {user.followed ?
                <UnFollow followingInProgress={followingInProgress} user={user} unFollow={unFollow}/>
                :
                <Follow followingInProgress={followingInProgress} user={user} follow={follow}/>
            }
        </div>
    )
}