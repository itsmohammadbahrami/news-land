'use client'

import { useEffect } from 'react'

import { useTranslations } from 'next-intl'
import { Tabs, TabsProps } from 'antd'
import { useAppDispatch, useAppSelector, getNews, setSelectedTab } from '@/store'
import { getArray } from '@/utils/utils'
import NewsList from '../news-list/NewsList'
import Search from '../search/Search'

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
            className='w-full'
            items={tabItems}
            onChange={(key) => {
                getData()
                dispatch(setSelectedTab(
                    key === 'All News' || key === 'Alle Nachrichten' ? 'All News' : 'My Feed'
                ))
            }}
            tabBarExtraContent={<Search />} />
    )
}

export default MainTabs