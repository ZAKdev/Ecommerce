import cookie from "react-cookie";

export const cookieUser = (user) => {
    cookie.save('user', user);
}