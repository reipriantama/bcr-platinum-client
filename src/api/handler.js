import axios from "axios";
import React from "react";
import CryptoJS from 'crypto-js';


const secretKey = '123az2278';

const handler = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
    timeout: 15000
});

const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

handler.interceptors.request.use((request) => {
    
    if(request.url !== "/customer/auth/login" && request.url !== "/customer/auth/register") {
        request.headers["access_token"] = `${decryptData(localStorage.getItem("token"))}`;
    }

    return request;
});

export { handler };