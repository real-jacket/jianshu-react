import React from 'react'
import mainRoutes from '@/router/main'
import MainWrapper from './style'

function Main() {
  return (
    <MainWrapper>
      {mainRoutes}
    </MainWrapper>
  )
}

export default Main
