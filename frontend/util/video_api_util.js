export const fetchVideos = () => (
     $.ajax({
        method: 'GET',
        url: '/api/videos'
    })
)

export const fetchVideo = (videoId) => (
     $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}`,
    })
)

export const createVideo = (video) => (
     $.ajax({
        method: 'POST',
        url: '/api/videos',
        data: { video }
    })
)

export const deleteVideo = (videoId) => (
     $.ajax({
        method: 'DELETE',
        url: `/api/videos/${videoId}`
    })
)

export const updateViews = (video) => (
     $.ajax({
        method: 'PATCH',
        url: `/api/videos/${video.id}/views`,
        data: { video }
    })
);