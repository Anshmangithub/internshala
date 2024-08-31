

import axios from "axios";

const instance = axios.create({
    baseURL : "https://intershalaapi-backend.vercel.app",
    withCredentials : true
})

export default instance;
