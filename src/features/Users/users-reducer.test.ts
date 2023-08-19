import {
    followSucces,
    setCurrentPage,
    setTotalUsers, toggleIsFetching,
    unfollowSucces,
    usersReducer,
    UsersStateType
} from "./users-reducer";


let state: UsersStateType

beforeEach(() => {
    state = {
        users: [
            {
                id: 1,
                name: 'Grigory',
                status: 'hello',
                photos: {
                    small: '',
                    large: '',
                },
                followed: true,
            },
            {
                id: 2,
                name: 'Alex',
                status: 'hello',
                photos: {
                    small: '',
                    large: '',
                },
                followed: false,
            }
        ],
        pageSize: 10,
        totalUsersCounter: 50,
        currentPage: 2,
        isFetching: false,
        followingInProgress: [],
    }
})


test('should change followed field to true', () => {
    const id = 2

    const newState = usersReducer(state, followSucces(id))
    expect(newState.users[1].followed).toBe(true)
})

test('should change followed field to false', () => {
    const id = 1

    const newState = usersReducer(state, unfollowSucces(id))
    expect(newState.users[0].followed).toBe(false)
})

test('should change current page', () => {
    const newCurrentPage = 5

    const newState = usersReducer(state, setCurrentPage(newCurrentPage))
    expect(newState.currentPage).toBe(5)
})

test('should set total users count', () => {
    const newTotalUsersCount = 40

    const newState = usersReducer(state, setTotalUsers(newTotalUsersCount))
    expect(newState.totalUsersCounter).toBe(40)
})

test('should change is fetching', () => {
    const newState = usersReducer(state, toggleIsFetching(true))
    expect(newState.isFetching).toBe(true)
})

