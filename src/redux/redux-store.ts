import {combineReducers, createStore} from "redux";
import profileReducer, {addPost, setUserProfile, updatePostText} from "./profileReducer";
import dialogsReducer, {sendMessage, updateMessageText} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {
    follow,
    setCurrentPage,
    setIsFetching, setIsFollowingInProgress,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./usersReducer";
import authReducer, {setAuthUserData} from "./auth-reducer";

export type ActionsType =
    ReturnType<typeof addPost> | ReturnType<typeof updatePostText> |
    ReturnType<typeof updateMessageText> | ReturnType<typeof sendMessage> |
    ReturnType<typeof follow> | ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof setIsFetching> |
    ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData> |
    ReturnType<typeof setIsFollowingInProgress>


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        sidebarBlock: sidebarReducer,
        auth: authReducer
    }
)

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers);
/*window.store = store;*/

export default store