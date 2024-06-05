import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { INewsCategory } from '@/types/news/news.type'
import { IFeedState } from '@/types/feed/feed.type'

const initialState: IFeedState = {
    category: 'All',
    source: '',
    remember: false,
}

const filtersSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        setFeedCategory: (state, action: PayloadAction<INewsCategory>) => {
            state.category = action.payload
        },
        setFeedSource: (state, action: PayloadAction<string>) => {
            state.source = action.payload
        },
        setFeedRemember: (state, action: PayloadAction<boolean>) => {
            state.remember = action.payload
        },
    }
})

export const { setFeedCategory, setFeedSource, setFeedRemember } = filtersSlice.actions
export default filtersSlice.reducer