import dayjs from "dayjs";
import { useTranslations } from "next-intl"
import { DatePicker, Typography } from "antd"
import { useAppDispatch } from "@/store/hooks"
import { setFiltersDate } from "@/store/slices/filters/filters.slice";
import { getArray } from "@/utils/utils";

const DateFilter = () => {
    const dispatch = useAppDispatch();
    const texts = useTranslations('filters')

    return (
        <div className="pt-6 pb-2 flex flex-col items-start gap-4">
            <Typography.Text className="!text-lg !font-normal">
                {texts("date")}
            </Typography.Text>

            <DatePicker.RangePicker
                placeholder={getArray(texts('datePlaceholder')) as [string, string]}
                onChange={(dates, [start, end]) => {
                    dispatch(setFiltersDate({
                        start,
                        end
                    }))
                }}
                disabledDate={(date) =>
                    date > dayjs().endOf('day')
                }
            />
        </div>
    )
}

export default DateFilter