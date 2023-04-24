import {ActionsType, BaseThunkType} from "./redux-store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form"

const initialState:DataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export type DataType = {
    userId: string | null
    email: string | null
    login: string | null,
    isAuth: boolean
}

const authReducer = (state: DataType = initialState, action: ActionsType): DataType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({type: "SET-USER-DATA", payload: {userId, email, login, isAuth}} as const);

export const getAuthUserData = () => (dispatch: Dispatch<ActionsType>) => {
    return authAPI.me()
        .then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, login, email, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.message.length > 0 ? response.data.message[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: {message}}));
        }
    })
}

export const logout = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer;