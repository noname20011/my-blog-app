import axios from 'axios'

export const apiAuth = axios.create(({
    baseURL: 'http://localhost:5000/auth'
}))

export const apiUser = axios.create(({
    baseURL: 'http://localhost:5000/user'
}))

export const apiBlog = axios.create(({
    baseURL: 'http://localhost:5000/blogs'
}))
export const apiCategory = axios.create(({
    baseURL: 'http://localhost:5000/category'
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