import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {addPost, setStatus, setUserProfile} from "./profileReducer";
import dialogsReducer, {sendMessage} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {
    followSuccess,
    setCurrentPage,
    setIsFetching,
    setIsFollowingInProgress,
    setTotalUsersCount,
    setUsers,
    unFollowSuccess
} from "./usersReducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer, {initializedSuccess} from "./app-reducer";

export type ActionsType =
    ReturnType<typeof addPost> | ReturnType<typeof initializedSuccess> |
    ReturnType<typeof sendMessage> |
    ReturnType<typeof followSuccess> | ReturnType<typeof unFollowSuccess> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof setIsFetching> |
    ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData> |
    ReturnType<typeof setIsFollowingInProgress> | ReturnType<typeof setStatus>

//export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, ActionsType>

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        sidebarBlock: sidebarReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer
    }
)

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
/*window.store = store;*/

export default store