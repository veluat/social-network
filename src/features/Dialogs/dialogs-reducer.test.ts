import {addMessage, dialogsReducer, DialogStateType} from "./dialogs-reducer";
import {v1} from "uuid";

let state: DialogStateType

beforeEach(() => {
    state = {
        dialogs: [
            {
                name: 'Lesha',
                id: v1(),
            },
            {
                name: 'Dima',
                id: v1(),
            },
            {
                name: 'Max',
                id: v1(),
            },
            {
                name: 'Kate',
                id: v1(),
            },
            {
                name: 'Den',
                id: v1(),
            },
        ],
        messages: [
            {
                id: v1(),
                message: 'Hi'
            },
            {
                id: v1(),
                message: 'Its me'
            },
            {
                id: v1(),
                message: 'Hello'
            },
        ]
    }
})

test('should change messages length', () => {
    const newState = dialogsReducer(state, addMessage({message: 'New message'}))
    expect(newState.messages.length).toBe(4
    )
})

test('should add proper text', () => {
    const textMessage = 'New message'
    const dialogReducerTest = dialogsReducer(state, addMessage({message: textMessage}))
    expect(dialogReducerTest.messages[dialogReducerTest.messages.length - 1].message).toBe('New message')
})