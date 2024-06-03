import axios from "axios";

const axiosNewsAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_NEWS_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosNewsAPI.interceptors.request.use((request) => {
    request.params = {
        ...request.params,
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY
    }

    return request;
}, (error) => {
    return Promise.reject(error);
});

export default axiosNewsAPI;