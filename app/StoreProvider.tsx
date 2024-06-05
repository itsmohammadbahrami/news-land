'use client'

import { useRef } from 'react'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Spin } from 'antd'
import { makeStore, AppStore } from '@/store'
import { IReactFC } from '@/types'

export default function StoreProvider({
    children
}: IReactFC) {
    const storeRef = useRef<AppStore>()

    if (!storeRef.current) storeRef.current = makeStore()

    return (
        <Provider store={storeRef.current}>
            <PersistGate
                loading={<Spin className='fixed left-1/2 top-1/2' size='large' />}
                persistor={persistStore(storeRef.current)}>
                {children}
            </PersistGate>
        </Provider>
    )
}