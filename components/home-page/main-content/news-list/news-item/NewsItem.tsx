import dayjs from "dayjs"
import { Image, Tag, Typography } from "antd"
import { INews } from "@/types"

interface Props {
    news: INews
}

const NewsItem: React.FC<Props> = ({ news }) => (
    <section
        className="flex flex-wrap gap-5 pe-4 py-4 cursor-pointer hover:shadow-xl hover:rounded-lg transition-shadow"
        onClick={() => window.open(news.newsUrl, '_blank')}
    >
        <div className="w-[20rem] max-md:w-full">
            <Image
                className="rounded-lg aspect-video object-cover h-[13rem] min-w-[13rem] max-md:h-auto max-md:max-w-[auto] "
                src={news.imageUrl}
                alt={news.category}
                preview={false}
            />
        </div>
        <div className="flex flex-col flex-1 justify-between gap-4">
            <Typography.Text className="!text-xl !font-medium line-clamp-3">
                {news.title}
            </Typography.Text>
            <Typography.Text className="!text-base !font-light line-clamp-2 max-h-12">
                {news.description}
            </Typography.Text>
            <div className="flex items-center">
                <CustomTag text={news.category} />
                <CustomTag text={news.source} />
                {
                    news.date &&
                    <CustomTag text={dayjs(news.date).format('dd, MMM DD YYYY')} />
                }
            </div>
        </div>
    </section>
)

const CustomTag: React.FC<{
    text: any
}> = ({ text }) => (
    <Tag className="!text-[#757575]" bordered={false} color="#0000000D">
        {text}
    </Tag>
)

export default NewsItem