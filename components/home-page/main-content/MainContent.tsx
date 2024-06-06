import { isMobile } from '@/utils'
import MainTabs from './main-tabs'
import FiltersButton from './filters-button'

const MainContent = () => (
    <section className='flex flex-col items-center'>
        <MainTabs />
        {
            isMobile() &&
            <FiltersButton />
        }
    </section>
)

export default MainContent