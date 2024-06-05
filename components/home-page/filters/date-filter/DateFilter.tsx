import dayjs from "dayjs";
import enUS from 'antd-mobile/es/locales/en-US'
import { useTranslations } from "next-intl"
import { Button, DatePicker, Typography } from "antd"
import { CalendarPicker, ConfigProvider } from "antd-mobile";
import { useAppDispatch, useAppSelector, setFiltersDate, setOpenDatePicker } from "@/store"
import { getArray, isDesktop, isMobile } from "@/utils";

const DateFilter = () => {
    const dispatch = useAppDispatch();
    const texts = useTranslations('filters')

    return (
        <div className="pt-6 pb-2 flex flex-col items-start gap-4">
            <Typography.Text className="!text-lg !font-normal">
                {texts("date")}
            </Typography.Text>

            {
                isDesktop() &&
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
                    inputReadOnly
                />
            }

            {
                isMobile() &&
                <MobileDatePicker />
            }
        </div>
    )
}

const MobileDatePicker: React.FC = () => {
    const dispatch = useAppDispatch();
    const { openDatePicker, date } = useAppSelector(state => state.filters)
    const texts = useTranslations('filters')

    return (
        <>
            <Button
                type="primary"
                onClick={() => {
                    dispatch(setOpenDatePicker(true))
                }}>
                {
                    date && date.start && date.end ?
                        texts("dateButton", {
                            start: date.start,
                            end: date.end
                        }) :
                        texts("selectDate")
                }
            </Button>
            <ConfigProvider locale={enUS}>
                <CalendarPicker
                    title={texts("selectDate")}
                    visible={openDatePicker}
                    selectionMode="range"
                    onConfirm={(value) => {
                        if (!value) return

                        const [start, end] = value;
                        dispatch(setFiltersDate({
                            start: dayjs(start).format('YYYY-MM-DD'),
                            end: dayjs(end).format('YYYY-MM-DD')
                        }))
                    }}
                    onClose={() => dispatch(setOpenDatePicker(false))}
                    shouldDisableDate={(date) =>
                        dayjs(date).startOf('day') > dayjs().endOf('day')
                    }
                    min={dayjs().startOf('year').toDate()}
                    max={dayjs().endOf('month').toDate()}
                />
            </ConfigProvider>
        </>
    )
}

export default DateFilter