import { useMemo } from "react"

import { useTranslations } from "next-intl"
import { Spin, Typography } from "antd"
import { useAppSelector } from "@/store"
import { testIds } from "@/utils"
import NewsItem from "./news-item"

const NewsList = () => {
    const { loading, news, selectedTab } = useAppSelector(state => state.news)
    const filters = useAppSelector(state => state.filters)
    const feed = useAppSelector(state => state.feed)
    const texts = useTranslations("newsList")

    const [category, source] = useMemo(() =>
        selectedTab === 'All News' ?
            [filters.category, filters.source] :
            [feed.category, feed.source]
        , [selectedTab, filters, feed])

    const filteredNews = useMemo(() =>
        news?.filter(newsItem =>
            (category !== 'All' ? newsItem.category === category : true) &&
            (source ? newsItem.source === source : true)
        )
        , [news, category, source]);

    if (loading) return <Spin size="large" className="absolute top-52 left-1/2" />

    if (!filteredNews?.length) return <Typography.Text type="secondary">{texts('notFound')}</Typography.Text>

    return (
        <section
            className="flex flex-col divide-y-[1px] divide-gray-300 pe-6 overflow-y-auto overflow-x-hidden h-[calc(100vh-9.25rem)] max-md:!pb-20 w-full"
            data-testid={testIds.news.listContainer}>
            {
                filteredNews &&
                filteredNews.length > 0 &&
                filteredNews.map((newsItem, index) =>
                    <NewsItem
                        testId={`${testIds.news.item}-${index}`}
                        key={newsItem.title}
                        news={newsItem}
                    />
                )
            }
        </section>
    )
}

export default NewsList