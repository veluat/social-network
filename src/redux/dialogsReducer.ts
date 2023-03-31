import {ActionsType} from "./redux-store";

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    ava: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
const initialState =  {
    dialogs: [
        {
            id: 1,
            name: 'Dima',
            ava: 'https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg'
        },
        {
            id: 2,
            name: 'Katya',
            ava: 'https://cdn2.vectorstock.com/i/1000x1000/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg'
        },
        {
            id: 3,
            name: 'Julia',
            ava: 'https://cdn2.vectorstock.com/i/1000x1000/26/06/young-executive-woman-profile-icon-vector-9692606.jpg'
        },
        {
            id: 4,
            name: 'Oleg',
            ava: 'https://cdn5.vectorstock.com/i/1000x1000/23/49/new-man-avatar-icon-flat-vector-19152349.jpg'
        },
        {
            id: 5,
            name: 'Alex',
            ava: 'https://cdn4.vectorstock.com/i/1000x1000/23/63/man-avatar-icon-flat-vector-19152363.jpg'
        },
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is new?'},
        {id: 4, message: 'Go to the park'},
        {id: 5, message: 'Have a gut day'}
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let text = action.newMessageText
           return  {
                ...state,
                messages: [...state.messages,
                    {id: new Date().getTime(), message: text}]
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessageText: string) => ({type: "SEND-MESSAGE", newMessageText} as const)

export default dialogsReducer;