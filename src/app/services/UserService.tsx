// import React, { useState, useEffect, useRef } from "react";
// import Keycloak from "keycloak-js";
//
//
// export const _kc  = new Keycloak({
//     url: "http://localhost:8181/",
//     realm: "barbenheimer-realm",
//     clientId: "barbenheimer-rest-api"
// });
//
// const initKeycloak = (onAuthenticatedCallback : any) => {
//     _kc.init({
//         onLoad: 'check-sso',
//     })
//         .then((authenticated) => {
//             if (!authenticated) {
//                 console.log("user is not authenticated..!");
//             }
//             onAuthenticatedCallback();
//         })
//         .catch(console.error);
// };
//
// const doLogin = _kc.login;
//
// const doLogout = _kc.logout;
//
// const getToken = () => _kc.token;
//
// const getTokenParsed = () => _kc.tokenParsed;
//
// const isLoggedIn = () => !!_kc.token;
//
// const updateToken = (successCallback : any) =>
//     _kc.updateToken(5)
//         .then(successCallback)
//         .catch(doLogin);
//
// const getUsername = () => _kc.tokenParsed?.preferred_username;
//
// const hasRole = (roles : any) => roles.some((role : any) => _kc.hasRealmRole(role));
//
// const UserService = {
//     initKeycloak,
//     doLogin,
//     doLogout,
//     isLoggedIn,
//     getToken,
//     getTokenParsed,
//     updateToken,
//     getUsername,
//     hasRole,
// };
//
// export default UserService;