import { useMemo } from "react"

import { useTranslations } from "next-intl"
import { Typography } from "antd"
import { useAppSelector } from "@/store/hooks"
import NewsItem from "./news-item/NewsItem"

const NewsList = () => {
    const { loading, news } = useAppSelector(state => state.news)
    const { category, source } = useAppSelector(state => state.filters)
    const texts = useTranslations("newsList")

    const filteredNews = useMemo(() =>
        news?.filter(newsItem =>
            (category !== 'All' ? newsItem.category === category : true) &&
            (source ? newsItem.source === source : true)
        )
        , [category, news, source]);

    if (loading) return <Typography.Text>{texts("loading")}</Typography.Text>

    if (!filteredNews?.length) return <Typography.Text type="secondary">{texts('notFound')}</Typography.Text>

    return (
        <section className="flex flex-col divide-y-[1px] divide-gray-300 pe-10 overflow-y-auto h-[calc(100vh-9.25rem)]">
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