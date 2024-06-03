import { ReactFC } from '@/types/app/app.type'
import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'

const AppLayout: React.FC<ReactFC> = ({ children }) => {
  return (
    <Layout>
      <Header>
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}

export default AppLayout