'use client'

import { Typography } from "antd"
import { useTranslations } from "next-intl"
import { useAppSelector } from "@/store"
import { isDesktop } from "@/utils/utils"
import CategoryFilter from "./category-filter/CategoryFilter"
import DateFilter from "./date-filter/DateFilter"
import SourceFilter from "./source-filter/SourceFilter"

const Filters = () => {
    const { selectedTab } = useAppSelector(state => state.news)
    const texts = useTranslations("filters")

    return (
        <section className="flex flex-col divide-y-[1px] divide-gray-200 gap-3 pt-[0.375rem]">
            {
                isDesktop() &&
                <Typography.Text className="!text-xl !font-bold">
                    {texts(selectedTab === 'All News' ? "title" : "customizeFeed")}
                </Typography.Text>
            }
            <CategoryFilter />
            {
                selectedTab === 'All News' &&
                <DateFilter />
            }
            <SourceFilter />
        </section>
    )
}

export default Filters