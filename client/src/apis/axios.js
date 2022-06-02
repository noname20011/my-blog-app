import axios from 'axios'

export const apiAuth = axios.create(({
    baseURL: 'https://myblogappreact.herokuapp.com/auth'
}))

export const apiUser = axios.create(({
    baseURL: 'https://myblogappreact.herokuapp.com/user'
}))

export const apiBlog = axios.create(({
    baseURL: 'https://myblogappreact.herokuapp.com/blogs'
}))
export const apiCategory = axios.create(({
    baseURL: 'https://myblogappreact.herokuapp.com/category'
}))

apiAuth.interceptors.request.use((req) => {
    if(localStorage.getItem('user')) {
        if(JSON.parse(localStorage.getItem('user')).token) {
            req.headers.Authorization = `Bearer ${ JSON.parse(localStorage.getItem('user')).token }`
        } else {
            req.headers.Authorization = `Bearer ${ JSON.parse(localStorage.getItem('user')).tokenId }`
        }
    }
    return req
})