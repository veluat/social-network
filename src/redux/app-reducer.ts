import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const initialState = {
    initialized: false
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const appReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const);

export const initializeApp = () => (dispatch: Dispatch<ActionsType>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;