import { configureStore } from '@reduxjs/toolkit'

import newsReducer from './slices/news/news.slice'
import filtersReducer from './slices/filters/filters.slice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            news: newsReducer,
            filters: filtersReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']