import axios from 'axios';

import { removeEmptyItems } from '@/utils';

const createAxios = (baseURL?: string) =>
    axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

const [axiosNewsAPI, axiosGuardianAPI, axiosNYTimesAPI] = [
    createAxios(process.env.NEXT_PUBLIC_NEWS_API_BASE_URL),
    createAxios(process.env.NEXT_PUBLIC_GUARDIAN_API_BASE_URL),
    createAxios(process.env.NEXT_PUBLIC_NYTIMES_API_BASE_URL),
];

const axiosInstances = {
    axiosNewsAPI,
    axiosGuardianAPI,
    axiosNYTimesAPI
};

const axiosAPIKeys = {
    axiosNewsAPI: {
        urlKey: 'apiKey',
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
    },
    axiosGuardianAPI: {
        urlKey: 'api-key',
        apiKey: process.env.NEXT_PUBLIC_GUARDIAN_API_KEY,
    },
    axiosNYTimesAPI: {
        urlKey: 'api-key',
        apiKey: process.env.NEXT_PUBLIC_NYTIMES_API_KEY,
    },
};

Object.keys(axiosInstances).forEach(axiosKey => {
    const key = axiosKey as keyof typeof axiosInstances;
    axiosInstances[key].interceptors.request.use(
        request => {
            const params = {
                ...request.params,
                [axiosAPIKeys[key].urlKey]:
                    axiosAPIKeys[key].apiKey,
            };

            request.params = removeEmptyItems(params)

            return request;
        },
        error => {
            return Promise.reject(error);
        }
    );
});

export { axiosNewsAPI, axiosGuardianAPI, axiosNYTimesAPI };
