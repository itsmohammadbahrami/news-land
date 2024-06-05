import { useTranslations } from "next-intl"
import { AutoComplete, Typography } from "antd"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { DefaultOptionType } from "antd/es/select";
import { removeDuplicates } from "@/utils/utils";
import { setFiltersSource } from "@/store/slices/filters/filters.slice";

const SourceFilter = () => {
    const dispatch = useAppDispatch();
    const { news } = useAppSelector(state => state.news)
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
                options={removeDuplicates(options, 'value')}
                onSelect={(value) => dispatch(setFiltersSource(value))}
                placeholder={texts("sourcePlaceholder")}
                filterOption={(inputValue, option) =>
                    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                allowClear
                onClear={() => dispatch(setFiltersSource(''))}
            />
        </div>
    )
}

export default SourceFilter