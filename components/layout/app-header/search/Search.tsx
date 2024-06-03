import { Input } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'

const Search = () => {
    const texts = useTranslations("header")

    return (
        <Input.Search
            className='!w-72'
            placeholder={texts("inputPlaceholder")}
            allowClear
            onSearch={() => { }}
        />
    )
}

export default Search