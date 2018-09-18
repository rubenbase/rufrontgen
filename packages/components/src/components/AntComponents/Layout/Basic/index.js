import React from 'react'
import './style.scss'
import { Layout } from 'antd'

export default function(ReactDOM, mountNode) {
  const { Header, Footer, Sider, Content } = Layout

  ReactDOM.render(
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>,
    mountNode,
  )
}
