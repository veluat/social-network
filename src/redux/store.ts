import profileReducer, {addPost, updatePostText} from "./profileReducer";
import dialogsReducer, {sendMessage, updateMessageText} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

/*const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are you?', likesCount: 2},
                {id: 3, message: 'Fineeeee', likesCount: 3},
                {id: 4, message: 'Hohohohoho', likesCount: 4},
                {id: 5, message: 'Qaaaaaqqqq', likesCount: 8}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dima',
                    ava: 'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg'
                },
                {
                    id: 2,
                    name: 'Olya',
                    ava: 'https://cdn2.vectorstock.com/i/1000x1000/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg'
                },
                {
                    id: 3,
                    name: 'Marina',
                    ava: 'https://cdn2.vectorstock.com/i/1000x1000/26/06/young-executive-woman-profile-icon-vector-9692606.jpg'
                },
                {
                    id: 4,
                    name: 'Egor',
                    ava: 'https://cdn5.vectorstock.com/i/1000x1000/23/49/new-man-avatar-icon-flat-vector-19152349.jpg'
                },
                {
                    id: 5,
                    name: 'Oleg',
                    ava: 'https://cdn4.vectorstock.com/i/1000x1000/23/63/man-avatar-icon-flat-vector-19152363.jpg'
                },
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Wooooooow'},
                {id: 4, message: 'Yoooooo'},
                {id: 5, message: 'Hohohohoh'}
            ],
            newMessageText: ''
        },
        sidebarBlock: {
            sidebar: [
                {
                    id: 1,
                    name: 'Kolya',
                    ava: 'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg'
                },
                {
                    id: 2,
                    name: 'Katya',
                    ava: 'https://cdn2.vectorstock.com/i/1000x1000/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg'
                },
                {
                    id: 3,
                    name: 'Vika',
                    ava: 'https://cdn2.vectorstock.com/i/1000x1000/26/06/young-executive-woman-profile-icon-vector-9692606.jpg'
                },
                {
                    id: 4,
                    name: 'Jenia',
                    ava: 'https://cdn5.vectorstock.com/i/1000x1000/23/49/new-man-avatar-icon-flat-vector-19152349.jpg'
                },
                {
                    id: 5,
                    name: 'Grisha',
                    ava: 'https://cdn4.vectorstock.com/i/1000x1000/23/63/man-avatar-icon-flat-vector-19152363.jpg'
                },

            ]
        }
    },
    _rerenderEntireTree() {
        console.log('State was changed')
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer
        console.log('hey observer')
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarBlock = sidebarReducer(this._state.sidebarBlock, action);
        this._rerenderEntireTree();
    }
}*/

/*
export type ActionsType =
    ReturnType<typeof addPostAC> | ReturnType<typeof updatePostTextAC> |
    ReturnType<typeof updateMessageTextAC> | ReturnType<typeof sendMessageAC>
*/

/*export type StoreType = {
    _state: RootStateType;
    subscribe: (observer: () => void) => void;
    _rerenderEntireTree: () => void;
    getState: () => RootStateType;
    dispatch: (action: ActionsType) =>  void
}*/
/*export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    ava: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}*/
/*export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}*/
/*export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}*/
/*export type SidebarType = {
    id: number
    name: string
    ava: string
}*/
/*export type SidebarBlockType = {
    sidebar: Array<SidebarType>
}*/
/*export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebarBlock: SidebarBlockType
}*/

/*
export default store;*/
