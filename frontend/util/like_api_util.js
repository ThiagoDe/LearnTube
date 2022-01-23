//fetch all likes and pass along the video_id
export const fetchLikes = (videoId) => (
     $.ajax({
        method: 'GET',
        url: '/api/likes',
        data: {videoId}
    })
)
//pass the likeState
export const createLike = (like) => (
     $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: { like }
    })
)
// pass the new likeState
export const updateLike = (like) => (
     $.ajax({
        method: 'PATCH',
        url: `/api/likes/${like.id}`,
        data: { like }
    })
)

export const deleteLike = (like) => (
     $.ajax({
        method: 'DELETE',
        url: `/api/likes/${like.id}`,
        data: {like},
    })
)