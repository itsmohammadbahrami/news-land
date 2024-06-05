'use client'

import { Typography } from "antd"
import { useTranslations } from "next-intl"
import { useAppSelector } from "@/store/hooks"
import CategoryFilter from "./category-filter/CategoryFilter"
import DateFilter from "./date-filter/DateFilter"
import SourceFilter from "./source-filter/SourceFilter"
import SaveFeed from "./save-feed/SaveFeed"

const Filters = () => {
    const { selectedTab } = useAppSelector(state => state.news)
    const texts = useTranslations("filters")

    return (
        <section className="flex flex-col divide-y-[1px] divide-gray-200 gap-3 pt-[0.375rem]">
            <Typography.Text className="!text-xl !font-bold">
                {texts(selectedTab == 'All News' ? "title" : "customizeFeed")}
            </Typography.Text>
            <CategoryFilter />
            {
                selectedTab === 'All News' &&
                <DateFilter />
            }
            <SourceFilter />
            {
                selectedTab === 'My Feed' &&
                <SaveFeed />
            }
        </section>
    )
}

export default Filters