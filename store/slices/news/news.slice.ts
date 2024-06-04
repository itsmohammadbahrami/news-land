import { createSlice } from '@reduxjs/toolkit'

import { INewsState } from '@/types/news/news.type'
import { getNews } from './news.api'

const initialState: INewsState = {
    loading: false,
    news: undefined
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state) => {
            state.loading = true;
        })
            .addCase(getNews.fulfilled, (state, action) => {
                state.loading = false;
                state.news = action.payload;
            })
            .addCase(getNews.rejected, (state) => {
                state.loading = false;
            })
    }
})

export const { } = newsSlice.actions
export default newsSlice.reducer