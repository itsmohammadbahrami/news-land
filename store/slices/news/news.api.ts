import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosGuardianAPI, axiosNYTimesAPI, axiosNewsAPI } from "@/services/apis";
import { INews } from "@/types/news/news.type";
import { convertGuardianApiData, convertNewsApiData, convertTimesApiData } from "@/utils/utils";

export const getNews = createAsyncThunk(
    'news/getNews',
    async (queries?: { searchText?: string }) => {

        try {
            const newsAPIReq = axiosNewsAPI.get(
                queries?.searchText ? 'everything' : 'top-headlines?country=us',
                {
                    validateStatus: null,
                    params: { q: queries?.searchText, pageSize: 20 },
                }
            );
            // const guardianAPIReq = axiosGuardianAPI.get('',
            //     {
            //         validateStatus: null,
            // params: { q: searchText }
            //     }
            // );
            // const timesAPIReq = axiosNYTimesAPI.get('',
            //     {
            //         validateStatus: null,
            // params: { q: searchText }
            //     }
            // );

            const [newsAPIRes,
                // guardianAPIRes, timesAPIRes
            ] = await axios.all([newsAPIReq,
                // guardianAPIReq, timesAPIReq
            ]);

            const data: INews[] = [
                ...convertNewsApiData(newsAPIRes.data?.articles),
                // ...convertGuardianApiData(guardianAPIRes.data?.response?.results),
                // ...convertTimesApiData(timesAPIRes.data?.response?.docs),
            ]

            return data;
        } catch (error) {
            console.log(error);
        }
    }
)