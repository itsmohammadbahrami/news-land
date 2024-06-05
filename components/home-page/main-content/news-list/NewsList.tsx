import { useMemo } from "react"

import { useTranslations } from "next-intl"
import { Typography } from "antd"
import { useAppSelector } from "@/store"
import NewsItem from "./news-item/NewsItem"

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

    if (loading) return <Typography.Text>{texts("loading")}</Typography.Text>

    if (!filteredNews?.length) return <Typography.Text type="secondary">{texts('notFound')}</Typography.Text>

    return (
        <section className="flex flex-col divide-y-[1px] divide-gray-300 pe-6 overflow-y-auto overflow-x-hidden h-[calc(100vh-9.25rem)] max-md:!pb-20 w-full">
            {
                filteredNews &&
                filteredNews.length > 0 &&
                filteredNews.map((newsItem) =>
                    <NewsItem
                        key={newsItem.title}
                        news={newsItem}
                    />
                )
            }
        </section>
    )
}

export default NewsList