import {authReducer, AuthStateType, setAuthUserData} from "./auth-reducer";

let state: AuthStateType

beforeEach(() => {
    state = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        isSubmit: false,
        errorMessage: '',
        captchaUrl: null
    }
})

test('set user data', () => {
    const newState = authReducer(state, setAuthUserData(1, 'my@gmail.com', 'Grigory', true))
    expect(newState.isAuth).toBe(true)
    expect(newState.id).toBe(1)
    expect(newState.email).toBe('my@gmail.com')
})