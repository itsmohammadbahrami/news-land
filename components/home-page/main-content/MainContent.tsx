import { isMobile, testIds } from '@/utils'
import MainTabs from './main-tabs'
import FiltersButton from './filters-button'

const MainContent = () => (
    <section
        className='flex flex-col items-center'
        data-testid={testIds.news.container}>
        <MainTabs />
        {
            isMobile() &&
            <FiltersButton />
        }
    </section>
)

export default MainContent