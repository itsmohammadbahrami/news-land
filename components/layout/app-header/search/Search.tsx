import { useAppDispatch } from '@/store/hooks'
import { useTranslations } from 'next-intl'
import { Input } from 'antd'
import { getNews } from '@/store/slices/news/news.api'

const Search = () => {
    const dispatch = useAppDispatch()
    const texts = useTranslations("header")

    return (
        <Input.Search
            className='!w-72'
            placeholder={texts("inputPlaceholder")}
            allowClear
            onSearch={(searchText, e, info) =>
                dispatch(getNews(info?.source === 'input' ? { searchText } : undefined))
            }
        />
    )
}

export default Search