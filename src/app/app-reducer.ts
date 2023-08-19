import {AppThunk} from "./redux-store";
import {getAuthUserData} from "../features/Login/auth-reducer";


const initialState: AppReducerStateType = {
    isInitialized: false,
    appStatus: 'idle',
    selectedPage: 'profile'
}

export const appReducer = (state: AppReducerStateType = initialState, action: AppActionsType): AppReducerStateType => {
    switch (action.type) {
        case 'app/SET-INIT-SUCCEEDED':
            return {...state, isInitialized: true}
        case 'app/SET-APP-STATUS':
            return {...state, appStatus: action.status}
        case 'app/SET-PAGE':
            return {...state, selectedPage: action.page}
        default:
            return state
    }
}

//actions
export const setInitializeSucceeded = () => ({type: 'app/SET-INIT-SUCCEEDED'} as const)

export const setAppStatus = (status: AppStatus) => ({type: 'app/SET-APP-STATUS', status} as const)

export const setPage = (page: AppPage) => ({type: 'app/SET-PAGE', page} as const)

//thunks
export const initializeApp = (): AppThunk => async (dispatch) => {
    const promise = dispatch(getAuthUserData())
    await Promise.all([promise])
    dispatch(setInitializeSucceeded())
}

//types
export type AppReducerStateType = {
    isInitialized: boolean
    appStatus: AppStatus
    selectedPage: AppPage
}

export type AppStatus = 'idle' | 'loading'
export type AppPage = 'profile' | 'dialogs' | 'users' | 'news'

export type AppActionsType = SetInitializeSucceededType | setAppStatusType | setPageType

type SetInitializeSucceededType = ReturnType<typeof setInitializeSucceeded>
type setAppStatusType = ReturnType<typeof setAppStatus>
type setPageType = ReturnType<typeof setPage>
