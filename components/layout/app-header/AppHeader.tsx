'use client'

import NewsIcon from '@/assets/icons/news.svg'
import { Typography } from 'antd'
import { useTranslations } from 'next-intl'

const AppHeader = () => {
  const texts = useTranslations("index")
  return (
    <>
      <NewsIcon />
      <Typography.Text className='!text-white !text-2xl font-medium'>
        {texts("title")}
      </Typography.Text>
    </>
  )
}

export default AppHeader