import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosGuardianAPI, axiosNYTimesAPI, axiosNewsAPI } from "@/services/apis";
import { convertGuardianApiData, convertNewsApiData, convertTimesApiData } from "@/utils/utils";
import { INews } from "@/types/news/news.type";
import { IFiltersState } from "@/types/filters/filters.type";

export const getNews = createAsyncThunk(
    'news/getNews',
    async (queries?: { searchText?: string, date: IFiltersState['date'] }) => {
        try {
            const isSearchTextAvailable = !!queries?.searchText
            const isDateAvailable = !!queries?.date?.start || !!queries?.date?.end

            const newsAPIReq = axiosNewsAPI.get(
                isSearchTextAvailable || isDateAvailable ? 'everything' : 'top-headlines?country=us',
                {
                    validateStatus: null,
                    params: {
                        q:
                            isSearchTextAvailable ? queries?.searchText :
                                isDateAvailable ? 'technology' : undefined,
                        pageSize: 20,
                        from: queries?.date?.start ?? undefined,
                        to: queries?.date?.end ?? undefined,
                    },
                }
            );
            // const guardianAPIReq = axiosGuardianAPI.get('',
            //     {
            //         validateStatus: null,
            // params: {
            //  q: searchText,
            //  'from-date':queries?.date?.start?? undefined,
            //  'to-date':queries?.date?.end?? undefined,
            //  }
            //     }
            // );
            // const timesAPIReq = axiosNYTimesAPI.get('',
            //     {
            //         validateStatus: null,
            // params: { 
            // q: searchText ,
            // begin_date:queries?.date?.start.replace(/-/g, '')?? undefined,
            // end_date:queries?.date?.end.replace(/-/g, '')?? undefined,
            // }
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