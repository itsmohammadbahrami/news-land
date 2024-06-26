import { useTranslations } from "next-intl"
import { Button, Drawer } from "antd"
import { useAppDispatch, useAppSelector, setOpenFiltersDrawer } from "@/store"
import Filters from "@/components/home-page/filters/Filters"

const FiltersButton = () => {
    const dispatch = useAppDispatch()
    const { selectedTab } = useAppSelector(state => state.news)
    const { openDrawer } = useAppSelector(state => state.filters)
    const texts = useTranslations('filters')

    const title = texts(selectedTab === 'All News' ? "title" : "customizeFeed")

    return (
        <>
            <Button
                className="fixed bottom-4 rounded-[4rem] px-8 shadow-lg"
                type="primary"
                onClick={() => dispatch(setOpenFiltersDrawer(true))}
            >
                {title}
            </Button>

            <Drawer
                title={title}
                height={selectedTab === 'All News' ? 'calc(100vh - 15rem)' : 'calc(100vh - 20rem)'}
                styles={{
                    body: { padding: '0.5rem 1rem' },
                    header: { padding: '0.9rem' }
                }}
                open={openDrawer}
                onClose={() => dispatch(setOpenFiltersDrawer(false))}
                placement="bottom">
                <Filters />
            </Drawer>
        </>
    )
}

export default FiltersButton