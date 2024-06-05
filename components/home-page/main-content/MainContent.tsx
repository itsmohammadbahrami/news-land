import { isMobile } from '@/utils'
import MainTabs from './main-tabs'
import FiltersButton from './filters-button'

const MainContent = () => {
    return (
        <section className='flex flex-col items-center'>
            <MainTabs />
            {
                isMobile() &&
                <FiltersButton />
            }
        </section>
    )
}

export default MainContent