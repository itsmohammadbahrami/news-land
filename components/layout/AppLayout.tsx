'use client'

import { IReactFC } from '@/types/app/app.type'
import { ConfigProvider, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import AppHeader from './app-header/AppHeader'

const AppLayout: React.FC<IReactFC> = ({ children }) => {
  return (
    <ConfigProvider theme={{
      algorithm: theme.defaultAlgorithm
    }}>
      <Layout className='overflow-hidden'>
        <Header className='flex items-center gap-2 !bg-transparent border-b-2 justify-between'>
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