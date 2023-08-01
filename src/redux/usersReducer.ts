import {ActionsType} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers/object-helpers";

export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
export type UsersPageType = {
    users: UserType[],
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean,
    followingInProgress: Array<number>
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true } )
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false } )
            }
        case 'SET-USERS': {
            return {
                ...state, users: action.users
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unFollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: UserType[]) => ({
    type: "SET-USERS", users: users
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: "SET-CURRENT-PAGE", currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount
} as const)
export const setIsFetching = (isFetching: boolean) => ({
    type: "TOGGLE-IS-FETCHING", isFetching
} as const)
export const setIsFollowingInProgress = (followingInProgress: boolean, userId: number) => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFollowing: followingInProgress, userId
} as const)

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsType>, userId: number, apiMethod: any, actiionCreator: typeof followSuccess | typeof unFollowSuccess) => {
    dispatch(setIsFollowingInProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actiionCreator(userId));
    }
    dispatch(setIsFollowingInProgress(false, userId));
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess)
    }
}
export const unFollow = (userId: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(userId), unFollowSuccess)
    }
}
export default usersReducer;