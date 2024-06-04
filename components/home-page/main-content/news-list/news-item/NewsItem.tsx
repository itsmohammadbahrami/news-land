import dayjs from "dayjs"
import { Image, Tag, Typography } from "antd"

import { INews } from "@/types/news/news.type"

interface Props {
    news: INews
}

const NewsItem: React.FC<Props> = ({ news }) => {
    return (
        <section
            className="grid grid-cols-3 gap-5 pe-4 py-4 cursor-pointer hover:shadow-xl hover:rounded-lg transition-shadow"
            onClick={() => window.open(news.newsUrl, '_blank')}
        >
            <div className="row-span-3">
                <Image
                    className="rounded-lg aspect-video object-cover min-w-[13rem]"
                    src={news.imageUrl}
                    alt={news.category}
                    preview={false}
                    height='13rem'
                />
            </div>
            <Typography.Text className="!text-xl !font-medium line-clamp-3 col-span-2">
                {news.title}
            </Typography.Text>
            <Typography.Text className="!text-base !font-light line-clamp-2 col-span-2 max-h-12">
                {news.description}
            </Typography.Text>
            <div className="flex items-center col-span-2">
                <CustomTag text={news.category} />
                <CustomTag text={news.source} />
                {
                    news.date &&
                    <CustomTag text={dayjs(news.date).format('dd, MMM DD YYYY')} />
                }
            </div>
        </section>
    )
}

const CustomTag: React.FC<{
    text: any
}> = ({ text }) => {
    return (
        <Tag className="!text-[#757575]" bordered={false} color="#0000000D">
            {text}
        </Tag>
    )
}

export default NewsItem