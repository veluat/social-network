import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 2},
        {id: 3, message: 'Fineeeee', likesCount: 3},
        {id: 4, message: 'Hohohohoho', likesCount: 4},
        {id: 5, message: 'Qaaaaaqqqq', likesCount: 8}
    ],
    profile: null,
    status: ''
}

export type ProfilePageType = {
    posts: Array<PostType>,
    profile: string | null
    status: string
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: new Date().getTime(), message: action.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            };
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            };
        case "SAVE-PHOTO-SUCCESS":
            return {
                ...state, profile: {...state.profile, photos: action.photos}};
        default:
            return state;
    }
}

export const addPost = (newPostText: string) => ({type: "ADD-POST", newPostText} as const)
export const setUserProfile = (profile: string | null) => ({
    type: "SET-USER-PROFILE", profile
} as const)
export const setStatus = (status: string) => ({type: "SET-STATUS", status} as const)
export const savePhotoSuccess = (photos: any) => ({type: "SAVE-PHOTO-SUCCESS", photos} as const)


export const getUserProfile = (userId: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}
export const savePhoto = (file: any) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}
export const getStatus = (userId: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
}

export default profileReducer;