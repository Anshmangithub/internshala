

import axios from "axios";

const instance = axios.create({
    baseURL : "https://talent-forge-backend-sigma.vercel.app/",
    withCredentials : true
})

export default instance;
