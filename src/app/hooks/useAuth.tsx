import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";
import Cookies from "js-cookie";


export const client = new Keycloak({
    url: "http://localhost:8181/",
    realm: "barbenheimer-realm",
    clientId: "barbenheimer-rest-api"
});


const useAuth = () => {
    // const isRun = useRef(false);
    // const [token, setToken] = useState(null);
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {

        client
            .init({
                onLoad: "check-sso",
                checkLoginIframe: false,
                // silentCheckSsoFallback: false,
                // silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`
            })
            .then((res) => {
                setLogin(res);
                const token = client.token;
                Cookies.set('token', token);
                // Cookies.set('refresh_token', client.refreshToken);
                // setToken(client.token);
            });

    }, []);

    return isLogin;
};

export default useAuth;