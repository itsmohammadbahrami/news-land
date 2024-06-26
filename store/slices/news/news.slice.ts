import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { INewsState } from '@/types'
import { getNews } from './news.api'

const initialState: INewsState = {
    loading: false,
    news: undefined,
    searchText: undefined,
    selectedTab: 'All News'
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload
        },
        setSelectedTab: (state, action: PayloadAction<INewsState['selectedTab']>) => {
            state.selectedTab = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNews.pending, (state) => {
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

export const { setSearchText, setSelectedTab } = newsSlice.actions
export default newsSlice.reducer