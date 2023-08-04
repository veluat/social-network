import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'aaa80c55-0a44-44bc-9139-4b0b82a58976',
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status});
    },
    savePhoto(file: File) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put<GeneralResponseType<{ photos: { small: string, large: string } }>>(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}



//types
export type GeneralResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}