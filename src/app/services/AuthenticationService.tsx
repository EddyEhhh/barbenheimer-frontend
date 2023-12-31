import AxiosInstance from "../api/AxiosInstance";
import { UserManager } from "oidc-client"
import Cookie from "js-cookie";

const token = Cookie.get('token');
export const getAuthConfig = () => ({
    headers: {
        // Accept: "application/json",
        Authorization: `Bearer ${token}`
    }

})

//
// const kcSettings = {
//     authority: "http://localhost:8181/realms/barbenheimer-realm/",
//     client_id: "barbenheimer-rest-api",
//     redirect_uri: "http://localhost:3000",
//     response_type: "code",
//     scope: "openid profile message.read"
// }
//
// const userManager = new UserManager(kcSettings);
//
// export const getUser = () : any => {
//     return userManager.getUser()
// }
//
// export const login = () => {
//     return userManager.signinRedirect();
// }
//
// export const logout = () => {
//     return userManager.signoutRedirect();
// }
//
//


