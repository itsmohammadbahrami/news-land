import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IFiltersState } from '@/types/filters/filters.type'
import { INewsCategory } from '@/types/news/news.type'

const initialState: IFiltersState = {
    category: 'All',
    date: undefined,
    source: '',
    openDrawer: false,
    openDatePicker: false
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
        setFiltersSource: (state, action: PayloadAction<string>) => {
            state.source = action.payload
        },
        setOpenFiltersDrawer: (state, action: PayloadAction<boolean>) => {
            state.openDrawer = action.payload
        },
        setOpenDatePicker: (state, action: PayloadAction<boolean>) => {
            state.openDatePicker = action.payload
        },
    }
})

export const {
    setFiltersCategory,
    setFiltersDate,
    setFiltersSource,
    setOpenFiltersDrawer,
    setOpenDatePicker
} = filtersSlice.actions
export default filtersSlice.reducer