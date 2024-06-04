import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IFiltersState } from '@/types/filters/filters.type'
import { INewsCategory } from '@/types/news/news.type'

const initialState: IFiltersState = {
    category: 'All'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFiltersCategory: (state, action: PayloadAction<INewsCategory>) => {
            state.category = action.payload
        }
    }
})

export const { setFiltersCategory } = filtersSlice.actions
export default filtersSlice.reducer