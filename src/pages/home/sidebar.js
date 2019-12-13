import React from 'react'
import AuthorItem from 'component/AuthorItem'
import {
  Wrapper, Board, AuthorWrapper, Header,
} from '@/pages/home/sidebar_style'

function HomeSidebar() {
  return (
    <Wrapper>
      {
        ['member', 'good', 'copyright', 'school'].map((name) => <Board key={name} src={`${process.env.PUBLIC_URL}/pic/home/sidebar_${name}.png`} />)
      }
      <AuthorWrapper>
        <Header>
          <span>
            推荐作者
          </span>
          <span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-qiehuan" />
            </svg>
              换一换
          </span>
        </Header>
        <AuthorItem />
      </AuthorWrapper>
    </Wrapper>
  )
}

export default HomeSidebar
