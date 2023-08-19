
import {createSelector} from "reselect";
import {AppStateType} from "../../app/redux-store";
import {UserType} from "../../features/Users/users-reducer";

export const getUsersPrimitive = (state: AppStateType): UserType[] => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsersPrimitive, (users: UserType[]) => {
    return users.filter(() => true)
})

export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}

export const getTotalUsers = (state: AppStateType): number => {
    return state.usersPage.totalUsersCounter
}

export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType): Array<number> => {
    return state.usersPage.followingInProgress
}



