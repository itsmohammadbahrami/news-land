import { useMemo } from "react"

import { useTranslations } from "next-intl"
import { useAppDispatch, useAppSelector, setFiltersCategory, setFeedCategory } from "@/store";
import { getArray } from "@/utils"
import { INewsCategory } from "@/types";
import FiltersWrapper from "../filters-wrapper";
import classnames from "classnames";

const CategoryFilter = () => {
    const texts = useTranslations("filters")

    return (
        <FiltersWrapper title={texts("category")}>
            <Tags items={getArray(texts("categoryItems"))} />
        </FiltersWrapper>
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