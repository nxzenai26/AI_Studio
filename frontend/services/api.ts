import axios from "axios";

const api = axios.create({
    baseURL:
        process.env.NEXT_PUBLIC_API_URL ??
        "http://127.0.0.1:8000/api/v1",

    headers: {
        "Content-Type": "application/json",
    },

    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,

    (error) => {
        if (error.response?.status === 401) {
            console.error("Unauthorized");
        }

        return Promise.reject(error);
    }
);

export default api;