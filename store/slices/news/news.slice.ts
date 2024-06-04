import { createSlice } from '@reduxjs/toolkit'

import { INewsState } from '@/types/news/news.type'

const initialState: INewsState = {
    loading: false,
    news: undefined
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
})

export const { } = newsSlice.actions
export default newsSlice.reducer