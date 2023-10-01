import axios from "axios";

const handler = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
    timeout: 15000
});

handler.interceptors.request.use((request) => {
    if(request.url !== "/customer/auth/login" && request.url !== "/customer/auth/register") {
        request.headers["access_token"] = `${localStorage.getItem("token")}`;
    }

    return request;
});

export { handler };