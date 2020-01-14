import React from 'react'
import sidebarRoutes from '@/router/sidebar'
import SidebarWrapper from '@/pages/layout/sidebar/style'

function Sidebar() {
  return <SidebarWrapper>{sidebarRoutes}</SidebarWrapper>
}

export default Sidebar
