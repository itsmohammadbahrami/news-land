'use client'

import { useEffect } from 'react'

import { useTranslations } from 'next-intl'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Tabs, TabsProps } from 'antd'
import { getArray } from '@/utils/utils'
import { getNews } from '@/store/slices/news/news.api'
import NewsList from '../news-list/NewsList'

const tabComponent = [<NewsList key='all-news-list' />, <NewsList key='feed-news-list' />]


const MainTabs = () => {
    const dispatch = useAppDispatch()
    const texts = useTranslations('mainContent')
    const { date } = useAppSelector(state => state.filters)
    const { searchText } = useAppSelector(state => state.news)

    const tabItems: TabsProps['items'] =
        getArray(texts('tabs')).map((tab, index) => ({
            key: tab,
            label: tab,
            children: tabComponent[index]
        }))

    const getData = () => {
        dispatch(getNews({ searchText, date }))
    }

    useEffect(() => {
        getData()
    }, [date, searchText]) // eslint-disable-line

    return (
        <Tabs
            items={tabItems}
            onChange={(key) => getData()} />
    )
}

export default MainTabs