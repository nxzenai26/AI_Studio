import axios from "axios";

import { API_URL } from "./constants";

const api = axios.create({
    baseURL: API_URL,

    timeout: 30000,

    withCredentials: true,

    headers: {
        "Content-Type": "application/json",
    },
});

export default api;