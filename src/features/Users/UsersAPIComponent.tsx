import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Users} from "./Users";

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        this.props.setPage('users')
    }

    onPageChanged = (p: number) => {
        this.props.getUsers(p, this.props.pageSize)
        this.props.setCurrentPage(p)
    }

    render() {
        return <>
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCounter={this.props.totalUsersCounter}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   setPage={this.props.setPage}
            />
        </>

    }
}








