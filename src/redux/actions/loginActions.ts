import { user } from "../types"

export interface requestLogin {
    type: 'SET_LOADING'
    startLoading: boolean
}
export interface LoginSuccess {
    type: 'SUCCESS_LOGIN'
    user: user
}
export interface loginFail {
    type: 'SUCCESS_Fail'
    message: string
}
export interface logout {
    type: 'LOGOUT'
}
// SET_USER
export interface currentUser {
    type: 'SET_USER',
    payload: string
}


export type ActionAuth = requestLogin | LoginSuccess | loginFail | logout | currentUser


export const send_request_login = () => {
    return { type: 'SET_LOADING', startLoading: true }
}

export const field_login = (message: string) => {
    return { type: 'SUCCESS_Fail', message }
}

export const success_login = (user: user) => {

    return { type: 'SUCCESS_LOGIN', user }
}

export const setCurrentUser = (id: string) => {
    return { type: 'SET_USER', payload: id }

}
export const Logout = () => {
    return { type: 'LOGOUT' }
}

