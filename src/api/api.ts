import axios from "axios";
import {UserType} from "../features/Users/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY,
    },
});

export const usersAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        const response = await instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async follow(id: number) {
        const response = await instance.post<CommonResponseType>(`follow/${id}`);
        return response.data;
    },
    async unFollow(id: number) {
        const response = await instance.delete<CommonResponseType>(`follow/${id}`);
        return response.data;
    }
}

export const profileAPI = {
    async getUserProfile(userId?: number) {
        const response = await instance.get<ProfileType>(`profile/` + userId);
        return response.data;
    },
    async getStatus(userId: string) {
        const response = await instance.get(`profile/status/` + userId);
        return response.data;
    },
    updateStatus(status: string) {
        return instance.put<CommonResponseType>(`profile/status/`, {status: status})
    },
    updatePhoto(file: File) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put<CommonResponseType<{ small: string, large: string }>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put<CommonResponseType>(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get<GetAuthResponseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null) {
        return instance.post<CommonResponseType>('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<CommonResponseType>('auth/login')
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<{ url: string }>(`security/get-captcha-url`);
    }
}

//types
type GetAuthResponseType = CommonResponseType<{
    id: number
    email: string
    login: string
}>

type CommonResponseType<T = {}> = {
    resultCode: ResultCodesEnum
    messages: string[]
    data: T
}

type GetUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export type ProfileType = {
    userId: number
    aboutMe?: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    Captcha = 10
}