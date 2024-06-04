import { useState } from "react"

import { useTranslations } from "next-intl"
import { Typography } from "antd"
import { getArray } from "@/utils/utils"
import { INewsCategory } from "@/types/news/news.type";
import classnames from "classnames";

const CategoryFilter = () => {
    const texts = useTranslations("filters")

    return (
        <div className="pt-6 pb-2 flex flex-col items-start gap-4">
            <Typography.Text className="!text-lg !font-normal">
                {texts("category")}
            </Typography.Text>

            <Tags
                items={getArray(texts("categoryItems"))}
                onClick={(item) => { }} />
        </div>
    )
}

const Tags: React.FC<{ items: string[], onClick: (item: INewsCategory) => void }> = ({ items, onClick }) => {
    const [selected, setSelected] = useState(items[0])

    return (
        <div className='flex items-center flex-wrap gap-2'>
            {
                items.map((item) =>
                    <span
                        key={item}
                        className={classnames(
                            "text-xs font-normal bg-[#0000000D] px-3 py-2 rounded-lg cursor-pointer", {
                            'bg-blue-500 text-white': selected === item
                        })}
                        onClick={() => {
                            setSelected(item)
                            onClick(item as INewsCategory)
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