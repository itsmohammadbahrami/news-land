import { useTranslations } from 'next-intl'
import { Input } from 'antd'
import { useAppDispatch, setSearchText } from '@/store'
import { testIds } from '@/utils'

const Search = () => {
    const dispatch = useAppDispatch()
    const texts = useTranslations("header")

    return (
        <Input.Search
            className='!w-auto max-md:!w-40'
            data-testid={testIds.news.searchInput}
            placeholder={texts("inputPlaceholder")}
            allowClear
            onSearch={(searchText, e, info) =>
                dispatch(setSearchText(info?.source === 'input' ? searchText : ''))
            }
        />
    )
}

export default Search