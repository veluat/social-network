import {AppThunk} from "../../app/redux-store";
import {profileAPI, ProfileType, ResultCodesEnum} from "../../api/api";
import {v1} from "uuid";
import {setAppStatus} from "../../app/app-reducer";
import {IPostFormInput} from "./MyPosts/Post/AddPostForm";

const profilePage: ProfileStateType = {
    posts: [
        {
            id: v1(),
            message:  'To build websites, you should know about HTML — the fundamental technology used to define the structure of a webpage. HTML is used to specify whether your web content should be recognized as a paragraph, list, heading, link, image, multimedia player, form, or one of many other available elements or even a new element that you define.',
            likes: 26,
        }, {
            id: v1(),
            message: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.',
            likes: 10,
        }, {
            id: v1(),
            message: 'TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of ' +
                'large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.',
            likes: 34,
        }, {
            id: v1(),
            message: 'Cascading Style Sheets — or CSS — is the first technology you should start learning after HTML. While HTML is used to define the structure and semantics of your content, CSS is used to style it and lay it out. For example, you can use CSS to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.',
            likes: 5,
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
