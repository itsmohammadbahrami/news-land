'use client'

import { useTranslations } from 'next-intl'
import { useAppDispatch } from '@/store/hooks'
import { Tabs, TabsProps } from 'antd'
import { getArray } from '@/utils/utils'
import { getNews } from '@/store/slices/news/news.api'


const MainTabs = () => {
    const texts = useTranslations('mainContent')
    const dispatch = useAppDispatch()

    const tabItems: TabsProps['items'] =
        getArray(texts('tabs')).map(tab => ({
            key: tab,
            label: tab,
            children: ''
        }))

    return (
        <Tabs defaultActiveKey="1" items={tabItems} onChange={(key) => { dispatch(getNews()) }} />
    )
}

export default MainTabs