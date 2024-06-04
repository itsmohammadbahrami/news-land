'use client'

import { useEffect } from 'react'

import { useTranslations } from 'next-intl'
import { useAppDispatch } from '@/store/hooks'
import { Tabs, TabsProps } from 'antd'
import { getArray } from '@/utils/utils'
import { getNews } from '@/store/slices/news/news.api'
import NewsList from '../news-list/NewsList'

const tabComponent = [<NewsList key='news-list' />, <>Feed</>]


const MainTabs = () => {
    const dispatch = useAppDispatch()
    const texts = useTranslations('mainContent')

    const tabItems: TabsProps['items'] =
        getArray(texts('tabs')).map((tab, index) => ({
            key: tab,
            label: tab,
            children: tabComponent[index]
        }))

    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])

    return (
        <Tabs
            items={tabItems}
            onChange={(key) => dispatch(getNews())} />
    )
}

export default MainTabs