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