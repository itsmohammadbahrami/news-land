import { useMemo } from "react"

import { useAppSelector } from "@/store/hooks"
import NewsItem from "./news-item/NewsItem"

const NewsList = () => {
    const { loading, news } = useAppSelector(state => state.news)
    const { category } = useAppSelector(state => state.filters)

    const filteredNews = useMemo(() =>
        news?.filter(newsItem => category !== 'All' ? newsItem.category === category : true)
        , [category, news]);

    if (loading) return <div>Loading...</div>


    return (
        <section className="flex flex-col divide-y-[1px] divide-gray-300 pe-10">
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