import {AppThunk} from "../../app/redux-store";
import {profileAPI, ProfileType, ResultCodesEnum} from "../../api/api";
import {v1} from "uuid";
import {setAppStatus} from "../../app/app-reducer";
import {IPostFormInput} from "./MyPosts/Post/AddPostForm";

const profilePage: ProfileStateType = {
    posts: [
        {
            id: v1(),
            message:  'ChatGPT (Generative Pre-trained Transformer) is a chatbot launched by OpenAI in November 2022. It is built on top of OpenAI\'s GPT-3 family of large language models, and is fine-tuned (an approach to transfer learning) with both supervised and reinforcement learning techniques.',
            likes: 16,
        }, {
            id: v1(),
            message: 'Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics. Some technologists and journalists have contrasted it with Web 2.0, wherein they say data and content are centralized in a small group of companies sometimes referred to as "Big Tech". The term "Web3" was coined in 2014 by Ethereum co-founder Gavin Wood, and the idea gained interest in 2021 from cryptocurrency enthusiasts, large technology companies, and venture capital firms.',
            likes: 20,
        }, {
            id: v1(),
            message: 'TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of ' +
                'large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.',
            likes: 28,
        }, {
            id: v1(),
            message: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state ' +
                'to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality',
            likes: 36,
        }
    ],
    profile: null,
    status: '',
    profileEditStatus: null,
    isEdit: false
}

export const profileReducer = (state: ProfileStateType = profilePage, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            const newPost: PostType = {
                id: v1(),
                message: action.post.post,
                likes: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        }

        case 'profile/DELETE-POST':
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}

        case 'profile/SET-PROFILE':
            return {...state, profile: action.profile}

        case 'profile/SET-STATUS':
            return {...state, status: action.status}

        case 'profile/SET-PHOTO':
            return {...state, profile: {...state.profile!, photos: action.photos}}

        case 'profile/SET-PROFILE-EDIT-STATUS':
            return {...state, profileEditStatus: action.status}

        case 'profile/SET-IS-EDIT':
            return {...state, isEdit: action.isEdit}

        default:
            return state
    }
}

//actions
export const addPost = (post: IPostFormInput) => ({type: 'profile/ADD-POST', post} as const)

export const deletePost = (postId: string) => ({type: 'profile/DELETE-POST', postId} as const)

export const setProfile = (profile: ProfileType) => ({type: 'profile/SET-PROFILE', profile} as const)

export const setStatus = (status: string) => ({type: 'profile/SET-STATUS', status} as const)

export const setPhoto = (photos: { small: string, large: string }) => ({type: 'profile/SET-PHOTO', photos} as const)

export const setProfileEditStatus = (status: string | null) => ({
    type: 'profile/SET-PROFILE-EDIT-STATUS',
    status
} as const)

export const setIsEdit = (isEdit: boolean) => ({type: 'profile/SET-IS-EDIT', isEdit} as const)


//thunks
export const getProfile = (userId: number): AppThunk => async (dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
        const data = await profileAPI.getUserProfile(userId)
        dispatch(setProfile(data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setAppStatus('idle'))
    }
}

export const getStatus = (userId: string): AppThunk => async (dispatch) => {
    try {
        const data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data))
    } catch (e) {
        console.log(e)
    }
}

export const updateStatus = (status: string): AppThunk => async (dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === ResultCodesEnum['Success']) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setAppStatus('idle'))
    }
}

export const savePhoto = (file: File): AppThunk => async (dispatch, getState) => {
    dispatch(setAppStatus('loading'))
    const userId = getState().auth.id
    try {
        const response = await profileAPI.updatePhoto(file)
        if (response.data.resultCode === ResultCodesEnum['Success']) {
            dispatch(getProfile(userId!))
        }

    } catch (e) {
        console.log(e)
    }
    finally {
        dispatch(setAppStatus('idle'))
    }
}

export const saveProfile = (profile: any): AppThunk => async (dispatch, getState) => {
    dispatch(setAppStatus('loading'))
    try {
        const userId = getState().auth.id;
        const response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === ResultCodesEnum['Success']) {
            if (userId) {
                await dispatch(getProfile(userId))
                dispatch(setProfileEditStatus(null))
                dispatch(setIsEdit(false))
            }
        } else {
            dispatch(setProfileEditStatus(response.data.messages[0]))
        }
    } catch (e) {
        console.log(e)
    }
    finally {
        dispatch(setAppStatus('idle'))
    }

}


//types
export type ProfileStateType = {
    posts: PostType[]
    profile: ProfileType | null
    status: string
    profileEditStatus: string | null
    isEdit: boolean
}

export type PostType = {
    id: string,
    message: string,
    likes: number,
    image?: string,
    name?: string

}

export type ProfileActionsType =
    AddPostACType
    | SetProfileType
    | SetStatusType
    | DeletePostACType
    | setPhotoType
    | setProfileEditStatusType
    | setIsEditType
type AddPostACType = ReturnType<typeof addPost>
type DeletePostACType = ReturnType<typeof deletePost>
type SetProfileType = ReturnType<typeof setProfile>
type SetStatusType = ReturnType<typeof setStatus>
type setPhotoType = ReturnType<typeof setPhoto>
type setProfileEditStatusType = ReturnType<typeof setProfileEditStatus>
type setIsEditType = ReturnType<typeof setIsEdit>
