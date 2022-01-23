import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

//action creator
const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}


//thunk
export const fetchUser = userId => dispatch => {
    return APIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}