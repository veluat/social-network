import {v1} from "uuid";
import {IMessageFormInput} from "./Messages/AddMessageForm";

const dialogs: DialogStateType = {
    dialogs: [
        {
            name: 'Lily Collins ',
            id: v1(),
        },
        {
            name: 'Mark Strong',
            id: v1(),
        },
        {
            name: 'Poppy Smith',
            id: v1(),
        },
        {
            name: 'Paul Wesley',
            id: v1(),
        },
        {
            name: 'Rose McGowan',
            id: v1(),
        },
        {
            name: 'Mark Strong',
            id: v1(),
        },
        {
            name: 'Nina Simone',
            id: v1(),
        },  {
            name: 'Mike Shinoda',
            id: v1(),
        },
        {
            name: 'Nil Keser',
            id: v1(),
        },
    ],
    messages: [
        {
            id: v1(),
            message: 'Hi! How are you?'
        },
        {
            id: v1(),
            message: 'Hi. Fine'
        },
        {
            id: v1(),
            message: 'Let\'s meet today?'
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


