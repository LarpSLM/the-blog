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