const cookie = require("react-cookie");

const cookieUser = (user) => {
    cookie.save('user', user);
}

module.exports = {
    cookieUser
}