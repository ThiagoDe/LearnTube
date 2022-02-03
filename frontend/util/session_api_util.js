
//usin the same url tha 'create' a user
export const signup = user => (
    $.ajax({
        url: "/api/users",
        method: "POST",
        data: { user }
    })
)
// url that #create session
export const login = user => {
    // debugger
   return $.ajax({
        url: "/api/session",
        method: "POST",
        data: { user }
    })
}

// url that #delete session(there always only one session)
export const logout = () => (
    $.ajax({
        url: "/api/session",
        method: "DELETE"
    })
)