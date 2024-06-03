import Logo from '@/assets/icons/logo.svg'
import AppLanguage from './app-language/AppLanguage'
import Search from './search/Search'

const AppHeader = () => {
  return (
    <>
      <Logo />
      <div className='flex items-center gap-4'>
        <Search />
        <AppLanguage />
      </div>
    </>
  )
}

export default AppHeader