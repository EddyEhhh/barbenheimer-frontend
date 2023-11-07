import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";


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
            })
            .then((res) => {
                setLogin(res);
                // setToken(client.token);
            });
    }, []);

    return isLogin;
};

export default useAuth;