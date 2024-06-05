import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import newsReducer from './slices/news/news.slice'
import filtersReducer from './slices/filters/filters.slice'
import feedReducer from './slices/feed/feed.slice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['feed']
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    news: newsReducer,
    filters: filtersReducer,
    feed: feedReducer
}));

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']