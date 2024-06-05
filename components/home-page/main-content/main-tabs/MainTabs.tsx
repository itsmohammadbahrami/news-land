'use client'

import { useEffect } from 'react'

import { useTranslations } from 'next-intl'
import { Tabs, TabsProps } from 'antd'
import { useAppDispatch, useAppSelector, getNews, setSelectedTab } from '@/store'
import { getArray } from '@/utils'
import NewsList from '../news-list'
import Search from './search'

const MainTabs = () => {
    const dispatch = useAppDispatch()
    const { date } = useAppSelector(state => state.filters)
    const { searchText } = useAppSelector(state => state.news)
    const texts = useTranslations('mainContent')

    const tabTexts = getArray(texts('tabs'));
    const tabItems: TabsProps['items'] =
        tabTexts.map((tab, index) => ({
            key: tab,
            label: tab,
            children: <NewsList />
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
                    key === tabTexts[0] ? 'All News' : 'My Feed'
                ))
            }}
            tabBarExtraContent={<Search />} />
    )
}

export default MainTabs