import {SidebarType} from "../index";
import {ActionsType} from "./redux-store";

const initialState:SidebarBlockType =  {
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

export type SidebarBlockType = {
    sidebar: Array<SidebarType>
}

const sidebarReducer = (state: SidebarBlockType = initialState, action: ActionsType): SidebarBlockType => {

            return state

}

export default sidebarReducer;
