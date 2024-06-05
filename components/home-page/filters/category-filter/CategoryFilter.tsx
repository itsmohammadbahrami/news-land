import { useEffect, useMemo, useState } from "react"

import { useTranslations } from "next-intl"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Typography } from "antd"
import { getArray } from "@/utils/utils"
import { INewsCategory } from "@/types";
import { setFiltersCategory } from "@/store/slices/filters/filters.slice";
import classnames from "classnames";
import { setFeedCategory } from "@/store/slices/feed/feed.slice";

const CategoryFilter = () => {
    const texts = useTranslations("filters")

    return (
        <div className="pt-6 pb-2 flex flex-col items-start gap-4">
            <Typography.Text className="!text-lg !font-normal">
                {texts("category")}
            </Typography.Text>

            <Tags items={getArray(texts("categoryItems"))} />
        </div>
    )
}

const Tags: React.FC<{ items: string[] }> = ({ items }) => {
    const dispatch = useAppDispatch()
    const feedCategory = useAppSelector(state => state.feed.category)
    const filterCategory = useAppSelector(state => state.filters.category)
    const { selectedTab } = useAppSelector(state => state.news)

    const selected = useMemo(() =>
        selectedTab === 'All News' ? filterCategory : feedCategory
        , [selectedTab, feedCategory, filterCategory])

    return (
        <div className='flex items-center flex-wrap gap-2'>
            {
                items.map((item) =>
                    <span
                        key={item}
                        className={classnames(
                            "text-xs font-normal bg-[#0000000D] px-3 py-2 rounded-lg cursor-pointer transition-colors", {
                            'bg-blue-primary text-white': selected === item
                        })}
                        onClick={() => {
                            selectedTab === 'All News' ?
                                dispatch(setFiltersCategory(item as INewsCategory)) :
                                dispatch(setFeedCategory(item as INewsCategory))
                        }}
                    >
                        {item}
                    </span>
                )
            }
        </div>
    )
}

export default CategoryFilter