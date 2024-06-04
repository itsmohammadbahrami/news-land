'use client'

import { useTranslations } from 'next-intl'
import { Tabs, TabsProps } from 'antd'
import { getArray } from '@/utils/utils'


const MainTabs = () => {
    const texts = useTranslations('mainContent')

    const tabItems: TabsProps['items'] =
        getArray(texts('tabs')).map(tab => ({
            key: tab,
            label: tab,
            children: tab
        }))

    return (
        <Tabs defaultActiveKey="1" items={tabItems} onChange={(key) => { }} />
    )
}

export default MainTabs