import { configureStore } from '@reduxjs/toolkit'

import newsReducer from './slices/news/news.slice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            newsState: newsReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']