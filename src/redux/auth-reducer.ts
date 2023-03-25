import {ActionsType} from "./redux-store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null) => ({type: "SET-USER-DATA", data: {userId, email, login}} as const);
export const getAuthUserData = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export default authReducer;