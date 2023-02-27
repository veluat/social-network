import {ActionsType} from "./redux-store";

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
const initialState:UsersPageType = {
    users: [
        /*{id: 1, photoUrl: 'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg',
            followed: false, fullName: 'Katya L.', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://cdn2.vectorstock.com/i/1000x1000/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg',
            followed: true, fullName: 'Olya R.', status: 'I am a boss', location: {city: 'Murmansk', country: 'Russia'}},
        {id: 3, photoUrl: 'https://cdn2.vectorstock.com/i/1000x1000/26/06/young-executive-woman-profile-icon-vector-9692606.jpg',
            followed: false, fullName: 'Yuliya D.', status: 'I am a boss', location: {city: 'Charlotte', country: 'USA'}},
        {id: 4, photoUrl: 'https://cdn5.vectorstock.com/i/1000x1000/23/49/new-man-avatar-icon-flat-vector-19152349.jpg',
            followed: false, fullName: 'Dima S.', status: 'I am a boss', location: {city: 'Grodno', country: 'Belarus'}},
        {id: 5, photoUrl: 'https://cdn4.vectorstock.com/i/1000x1000/23/63/man-avatar-icon-flat-vector-19152363.jpg',
            followed: true, fullName: 'Anton M.', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}}
    */],
    pageSize: 5,
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
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                       return  {...u, followed: true}
                }
                return u;
            })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                        return  {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET-USERS':{
            return {
                ...state, users: action.users
            }}
        case 'SET-CURRENT-PAGE':{
            return {
                ...state, currentPage: action.currentPage
            }}
        case 'SET-TOTAL-USERS-COUNT':{
            return {
                ...state, totalUsersCount: action.count
            }}
        case 'TOGGLE-IS-FETCHING':{
            return {
                ...state, isFetching: action.isFetching
            }}
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':{
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=>id!=action.userId)
            }}
        default:
            return state;
    }
}

export const follow = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unfollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: UserType[]) => ({
    type: "SET-USERS", users: users
} as const)
export const setCurrentPage = (currentPage:number) => ({
    type: "SET-CURRENT-PAGE", currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount:number) => ({
    type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount
} as const)
export const setIsFetching = (isFetching:boolean) => ({
    type: "TOGGLE-IS-FETCHING", isFetching
} as const)
export const setIsFollowingInProgress = (followingInProgress:boolean, userId: number) => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFollowing:followingInProgress, userId
} as const)


export default usersReducer;