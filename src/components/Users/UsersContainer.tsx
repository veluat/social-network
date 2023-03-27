import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage,
    setIsFetching,
    setIsFollowingInProgress,
    setTotalUsersCount,
    setUsers, unFollow,
    unFollowSuccess,
    UserType
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type UsersType = {
    users: UserType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: UserType[]) => void
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    isFetching: boolean
    setIsFollowingInProgress: (following: boolean, userId: number) => void
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow ={this.props.unFollow }
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default withAuthRedirect(connect(mapStateToProps, {
    follow, unFollow, setCurrentPage, setIsFollowingInProgress, getUsers
})(UsersContainer));