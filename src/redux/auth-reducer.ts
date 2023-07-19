import {ActionsType} from "./redux-store";
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

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA'

const authReducer = (state: DataType = initialState, action: ActionsType): DataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const);

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, login, email, true))
        }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.message.length > 0 ? response.data.message[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: {message}}));
        }
}

export const logout = () => async (dispatch: Dispatch<ActionsType>) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

export default authReducer;