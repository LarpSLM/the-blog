import axiosFetch from "./axios";

export function signIn(data) {
    return axiosFetch({
        url: 'users/signin',
        method: 'POST',
        data
    })
}

export function signUp(data) {
    return axiosFetch({
        url: 'users/signup',
        method: 'POST',
        data
    })
}

export function auth() {
    return axiosFetch({
        url: 'users/auth',
        method: 'GET',
    })
}

export function logOut() {
    return axiosFetch({
        url: 'users/signout',
        method: 'GET',
    })
}

export function checkLogin(data) {
    return axiosFetch({
        url: 'users/check-exists/',
        method: 'POST',
        data: {
            login: data
        }
    })
}

export function getUserInfo(id) {
    return axiosFetch({
        url: `users/${id}`,
        method: 'GET'
    })
}

export function changeUserPassword(data) {
    return axiosFetch({
        url: 'users/change/password/',
        method: 'PUT',
        data
    })
}

export function getAuthors() {
    return axiosFetch({
        url: `users`,
        method: 'GET'
    })
}