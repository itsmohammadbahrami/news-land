import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IFiltersState } from '@/types/filters/filters.type'
import { INewsCategory } from '@/types/news/news.type'

const initialState: IFiltersState = {
    category: 'All',
    date: undefined
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFiltersCategory: (state, action: PayloadAction<INewsCategory>) => {
            state.category = action.payload
        },
        setFiltersDate: (state, action: PayloadAction<IFiltersState['date']>) => {
            state.date = action.payload
        },
    }
})

export const { setFiltersCategory, setFiltersDate } = filtersSlice.actions
export default filtersSlice.reducer