export const fetchUser = (userId) => (
    $.ajax({
        url: `/api/users/${userId}`
    })
)
// the user create is in the session_api_util.js 