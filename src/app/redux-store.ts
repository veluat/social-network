import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "../features/Profile/profile-reducer";
import {DialogActionsType, dialogsReducer} from "../features/Dialogs/dialogs-reducer";
import {usersReducer, UsersActionsType} from "../features/Users/users-reducer";
import {AuthActionsType, authReducer} from "../features/Login/auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {AppActionsType, appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

//https://stackoverflow.com/a/52801110
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        __store__: unknown
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type AppStateType = ReturnType<typeof rootReducer>
export type AllActionsTypes =
    ProfileActionsType
    | DialogActionsType
    | UsersActionsType
    | AuthActionsType
    | AppActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AllActionsTypes>

window.__store__ = store

export default store


