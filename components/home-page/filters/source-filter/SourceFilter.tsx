import { useTranslations } from "next-intl"
import { AutoComplete, Typography } from "antd"
import { DefaultOptionType } from "antd/es/select";
import { useAppDispatch, useAppSelector, setFeedSource, setFiltersSource, } from "@/store"
import { removeDuplicates } from "@/utils";

const SourceFilter = () => {
    const dispatch = useAppDispatch();
    const { news, selectedTab } = useAppSelector(state => state.news)
    const feedSource = useAppSelector(state => state.feed.source)
    const filterSource = useAppSelector(state => state.filters.source)
    const texts = useTranslations('filters')

    const options: DefaultOptionType[] | undefined = news?.map(item => ({
        value: item.source,
        label: item.source,
    }))

    return (
        <div className="pt-6 pb-2 flex flex-col items-start gap-4">
            <Typography.Text className="!text-lg !font-normal">
                {texts("source")}
            </Typography.Text>

            <AutoComplete
                className="w-52"
                value={selectedTab === 'All News' ? filterSource : feedSource}
                options={removeDuplicates(options, 'value')}
                onSelect={(value) =>
                    selectedTab === 'All News' ?
                        dispatch(setFiltersSource(value)) :
                        dispatch(setFeedSource(value))
                }
                placeholder={texts("sourcePlaceholder")}
                filterOption={(inputValue, option) =>
                    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                allowClear
                onClear={() =>
                    selectedTab === 'All News' ?
                        dispatch(setFiltersSource('')) :
                        dispatch(setFeedSource(''))
                }
            />
        </div>
    )
}

export default SourceFilter