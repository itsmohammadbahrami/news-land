import { useAppSelector } from "@/store/hooks"
import NewsItem from "./news-item/NewsItem"

const NewsList = () => {
    const { loading, news } = useAppSelector(state => state.newsState)

    if (loading) return <div>Loading...</div>

    return (
        <section className="flex flex-col divide-y-[1px] divide-gray-300 pe-10">
            {
                news &&
                news.length > 0 &&
                news.map((newsItem) =>
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