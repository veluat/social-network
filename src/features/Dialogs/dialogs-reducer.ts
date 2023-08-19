import {v1} from "uuid";
import {IMessageFormInput} from "./Messages/AddMessageForm";

const dialogs: DialogStateType = {
    dialogs: [
        {
            name: 'Ashley Briggs',
            id: v1(),
        },
        {
            name: 'Carl Jenkins',
            id: v1(),
        },
        {
            name: 'Bob Smith',
            id: v1(),
        },
        {
            name: 'Stacie Hall',
            id: v1(),
        },
        {
            name: 'Bertha Martin',
            id: v1(),
        },
        {
            name: 'Oliver Grey',
            id: v1(),
        },
        {
            name: 'Ben White',
            id: v1(),
        },  {
            name: 'Ian Holloway',
            id: v1(),
        },
        {
            name: 'Brian O\'Neill',
            id: v1(),
        },
    ],
    messages: [
        {
            id: v1(),
            message: 'Hello friend, can we appoint a meeting?'
        },
        {
            id: v1(),
            message: 'Hello'
        },
        {
            id: v1(),
            message: 'Sure. Which time are you free this week?.'
        },
    ]
}

export const dialogsReducer = (state: DialogStateType = dialogs, action: DialogActionsType): DialogStateType => {
    switch (action.type) {
        case 'dialogs/ADD-MESSAGE': {
            const newMessage = {id: v1(), message: action.message.message}
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }

}

//actions
export const addMessage = (message: IMessageFormInput) => ({type: 'dialogs/ADD-MESSAGE', message} as const)

//types
export type DialogActionsType = AddMessageACType
export type AddMessageACType = ReturnType<typeof addMessage>

export type DialogType = {
    name: string,
    id: string,
}

export type MessageType = {
    id?: string,
    message: string
}

export type DialogStateType = {
    dialogs: DialogType[]
    messages: MessageType[]
}


