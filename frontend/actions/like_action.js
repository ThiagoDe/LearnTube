import * as APIUtil from "../util/like_api_util";

export const RECEIVED_LIKES = 'RECEIVED_LIKES';

const receivedLikes = likes => ({
        type: RECEIVED_LIKES,
        likes,
})

export const fetchLikes = videoId => dispatch => (
    APIUtil.fetchLikes(videoId)
        .then( likes => dispatch(receivedLikes(likes)))
)

export const createLike = like => dispatch => (
    APIUtil.createLike(like)
        .then( likes => dispatch(receivedLikes(likes)))
)

export const updateLike = like => dispatch => (
    APIUtil.updateLike(like)
        .then(likes => dispatch(receivedLikes(likes)))
)

export const deleteLike = like => dispatch => (
    APIUtil.deleteLike(like)
        .then(likes => dispatch(receivedLikes(likes)))
)