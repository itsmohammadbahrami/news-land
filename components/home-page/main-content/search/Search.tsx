import { useAppDispatch } from '@/store/hooks'
import { useTranslations } from 'next-intl'
import { Input } from 'antd'
import { setSearchText } from '@/store/slices/news/news.slice'

const Search = () => {
    const dispatch = useAppDispatch()
    const texts = useTranslations("header")

    return (
        <Input.Search
            className='!w-auto max-md:!w-[9.375rem]'
            placeholder={texts("inputPlaceholder")}
            allowClear
            onSearch={(searchText, e, info) =>
                dispatch(setSearchText(info?.source === 'input' ? searchText : ''))
            }
        />
    )
}

export default Search