'use client'

import { Typography } from "antd"
import { useTranslations } from "next-intl"
import CategoryFilter from "./category-filter/CategoryFilter"

const Filters = () => {
    const texts = useTranslations("filters")

    return (
        <section className="flex flex-col divide-y-[1px] divide-gray-200 gap-3 pt-[0.375rem]">
            <Typography.Text className="!text-xl !font-bold">
                {texts("title")}
            </Typography.Text>
            <CategoryFilter />
        </section>
    )
}

export default Filters