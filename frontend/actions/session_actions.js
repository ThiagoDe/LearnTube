import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

// thunks
export const signupUser = formUser => dispatch => (
    APIUtil.signup(formUser)
        .then( user => dispatch(receiveCurrentUser(user)))
)

export const login = formUser => dispatch => (
    APIUtil.login(formUser)
        .then( user => dispatch(receiveCurrentUser(user)))
)

export const logout = () => dispatch => (
    APIUtil.logout()
        .then( () => dispatch(logoutCurrentUser()))
)