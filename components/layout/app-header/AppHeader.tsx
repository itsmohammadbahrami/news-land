import Logo from '@/assets/icons/logo.svg'
import AppLanguage from './app-language/AppLanguage'
import Search from './search/Search'
import { isDesktop } from '@/utils/utils'

const AppHeader = () => {
  return (
    <>
      <Logo />
      {
        isDesktop() &&
        <div className='flex items-center gap-4'>
          <Search />
          <AppLanguage />
        </div>
      }
    </>
  )
}

export default AppHeader