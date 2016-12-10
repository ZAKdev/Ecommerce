const
    config = require("./config-admin"),
    axios = require("axios");

const api = axios.create({
    baseURL: config.apiUrl,
    withCredentials: false,
    headers: {'Content-Type': 'application/json'}
})

const userLogin = (user, pass) => {
    return api.post('/auth', {
        username: user,
        password: pass
    })
}

module.exports = {
    userLogin
}