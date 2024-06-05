'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { makeStore, AppStore } from '@/store/store'
import { persistStore } from 'redux-persist'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()

    if (!storeRef.current) storeRef.current = makeStore()

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistStore(storeRef.current)}>
                {children}
            </PersistGate>
        </Provider>
    )
}