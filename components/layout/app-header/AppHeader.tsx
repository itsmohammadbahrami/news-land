import { testIds } from '@/utils'
import Logo from '@/assets/icons/logo.svg'
import AppLanguage from './app-language'

const AppHeader = () => (
  <>
    <Logo data-testid={testIds.header.logo} />
    <AppLanguage />
  </>
)

export default AppHeader