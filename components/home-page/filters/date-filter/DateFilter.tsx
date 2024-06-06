import dayjs from "dayjs";
import enUS from 'antd-mobile/es/locales/en-US'
import { useTranslations } from "next-intl"
import { Button, DatePicker } from "antd"
import { CalendarPicker, ConfigProvider } from "antd-mobile";
import { useAppDispatch, useAppSelector, setFiltersDate, setOpenDatePicker } from "@/store"
import { getArray, isDesktop, isMobile, testIds } from "@/utils";
import FiltersWrapper from "../filters-wrapper";

const DateFilter = () => {
    const dispatch = useAppDispatch();
    const texts = useTranslations('filters')

    return (
        <FiltersWrapper title={texts("date")} testId={testIds.filters.date}>
            {
                isDesktop() &&
                <DatePicker.RangePicker
                    data-testid={testIds.filters.dateInput}
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
        </FiltersWrapper>
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
                    data-testid={testIds.filters.dateInput}
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