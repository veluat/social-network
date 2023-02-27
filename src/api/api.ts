import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'aaa80c55-0a44-44bc-9139-4b0b82a58976',
    },
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}
export const authAPI = {
    getCurrentUserData () {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => response.data)
    }
}
export const unFollowAPI = {
    unFollow (id: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(response => response.data)
    }
}
export const followAPI = {
    follow (id: number) {
       return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
           .then(response => response.data)
    }
}


