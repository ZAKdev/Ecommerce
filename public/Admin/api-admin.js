import * as config from "./../../config/config";
import axios from "axios";

const api = axios.create({
    baseURL: config.apiUrl,
    withCredentials: false,
    headers: {'Content-Type': 'application/json'}
})

export const userLoginApi = (user, pass) => {
    return api.post('/auth', {
        username: user,
        password: pass
    })
}