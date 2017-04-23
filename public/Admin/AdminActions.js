import { userLoginApi } from "./api-admin";
import { cookieUser } from "./cookie-admin";

export const UserLogin = (username, password) =>
    (dispatch) => {
        userLoginApi(username, password)
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