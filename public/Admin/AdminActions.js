const
    {userLogin} = require("./api-admin"),
    {cookieUser} = require("./cookie-admin");

const UserLogin = (username, password) => {
    return (dispatch) => {
        userLogin(username, password)
            .then((response) => {
                cookieUser(response.data)
                dispatch({
                    type: "VALID_USER",
                    content: "Logined"
                })
            })
            .catch((error) => {
                dispatch({
                    type: "NOT_REGISTERED",
                    content: "Error: User Not Found"
                })
            })
    }
}

module.exports = {
    UserLogin
}