import React from 'react'
import Header from './header'
import Sidebar from '@/pages/layout/sidebar'
import Main from '@/pages/layout/main'

function Layout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
    </div>
  )
}

export default Layout
