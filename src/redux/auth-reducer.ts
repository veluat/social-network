import {ActionsType} from "./redux-store";

const initialState:DataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false/*,
    isFetching: false*/
}
export type DataType = {
    userId: string | null
    email: string | null
    login: string | null,
    isAuth: boolean/*,
    isFetching: boolean*/
}

const authReducer = (state: DataType = initialState, action: ActionsType): DataType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        /*case 'TOGGLE-IS-FETCHING':{
            return {
                ...state/!*, isFetching: action.isFetching*!/
            }}*/
        default:
            return state;
    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null) => ({type: "SET-USER-DATA", data: {userId, email, login}} as const);
/*export const setIsFetching = (isFetching:boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)*/


export default authReducer;