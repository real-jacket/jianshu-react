import React, { Component } from 'react'
import {
  Wrapper,
  Logo,
  Nav,
  Addition,
  NavSearch,
  SearchIcon,
} from './style'

function Header() {
  return (
    <Wrapper>
      <Logo>
        <img src="/jianshu_log.png" alt="Nav logo" />
      </Logo>
      <Nav>
        <li className="home">首页</li>
        <li className="download">下载App</li>
        <li className="navsearch">
          <NavSearch>
            <input placeholder="搜索" />
            <SearchIcon>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-search" />
              </svg>
            </SearchIcon>
          </NavSearch>
        </li>
      </Nav>
      <Addition />
    </Wrapper>
  )
}

export default Header
