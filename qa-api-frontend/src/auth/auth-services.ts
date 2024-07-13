import Cookies from "js-cookie";

const CLIENT_ID = "qa-client";
const CLIENT_SECRET = "2uXLgRT60A1ITmp1UDRkke8eB12pFo8N";
const TOKEN_URL = "http://localhost:8443/realms/qa-realm/protocol/openid-connect/token";
const REDIRECT_URI = "http://localhost:3000/auth/callback";

type TokenProps = {
    access_token: string,
    expires_in: number
};

const retrieveToken = async (code: string) => {
    let params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("redirect_uri", REDIRECT_URI);
    params.append("client_id", CLIENT_ID);
    params.append("client_secret", CLIENT_SECRET);
    params.append("code", code);

    try {
        const response = await fetch(TOKEN_URL, {
            method: "POST",
            body: params,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro na troca de código por token:", errorData);
            return;
        }

        const token = await response.json();
        saveToken(token);
    } catch (error) {
        console.error("Erro na troca de código por token:", error);
    }
};

const saveToken = (token: TokenProps) => {
    Cookies.set("access_token", token.access_token);
    localStorage.setItem("teste", token.access_token);
    console.log("Obtained Access token");
};

const getResource = async (resourceUrl: string) => {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("access_token")}`,
    };

    return await fetch(resourceUrl, {
        method: "GET",
        headers: headers,
    });
};

const checkCredentials = () => {
    return !!Cookies.get("access_token");
};

const logout = () => {
    Cookies.remove("access_token");
    window.location.reload();
};

const authService = {
    retrieveToken,
    getResource,
    checkCredentials,
    logout,
};

export default authService;
