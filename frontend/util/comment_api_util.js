//comments are nested under videos routes

export const fetchComments = (videoId) => (
     $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}/comments`
    })
)

export const createComment = (comment) => {
    // debugger
     return $.ajax({
        method: 'POST',
        url: `/api/videos/${comment.video_id}/comments`,
        data: {comment}
    })
}

export const updateComment = (comment) => (
     $.ajax({
        method: 'PUT',
        url: `/api/videos/${comment.video_id}/comments/${comment.id}`
    })
)

export const deleteComment = (comment) => (
     $.ajax({
        method: 'DELETE',
        url: `/api/videos/${comment.videoId}/comments/${comment.id}`
    })
)