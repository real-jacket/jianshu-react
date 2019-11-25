import React from 'react'
import Header from '@/pages/layout/header'
import Sidebar from '@/pages/layout/sidebar'
import Main from '@/pages/layout/main'
import { Wrapper } from '@/pages/layout/style'

function Layout() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Main />
        <Sidebar />
      </Wrapper>
    </div>
  )
}

export default Layout
