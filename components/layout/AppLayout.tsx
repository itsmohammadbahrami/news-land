'use client'

import { ConfigProvider, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { IReactFC } from '@/types'
import AppHeader from './app-header'

const AppLayout: React.FC<IReactFC> = ({ children }) => (
  <ConfigProvider
    theme={{
      algorithm: theme.defaultAlgorithm,
      token: {
        colorPrimary: '#355FDE'
      }
    }}>
    <Layout className='overflow-hidden'>
      <Header className='flex items-center gap-2 !bg-transparent border-b-2 justify-between max-md:px-2'>
        <AppHeader />
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  </ConfigProvider>
)

export default AppLayout