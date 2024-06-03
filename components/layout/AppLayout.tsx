'use client'
import { ReactFC } from '@/types/app/app.type'
import { ConfigProvider, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import AppHeader from './app-header/AppHeader'

const AppLayout: React.FC<ReactFC> = ({ children }) => {
  return (
    <ConfigProvider theme={{
      algorithm: theme.defaultAlgorithm
    }}>
      <Layout>
        <Header className='flex items-center gap-2'>
          <AppHeader />
        </Header>
        <Content>
          {children}
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default AppLayout