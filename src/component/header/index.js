import React, { Component } from 'react'
import {
  Wrapper,
  Logo,
  Nav,
  Addition,
  NavSearch,
  SearchIcon,
  SearchRecommend,
  SearchItem,
  SearchHeader,
} from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      mouseIn: false,
    }
  }

  render() {
    const { focus, mouseIn } = this.state
    return (
      <Wrapper>
        <div className="header">
          <Logo>
            <img src="/jianshu_log.png" alt="Nav logo" />
          </Logo>
          <Nav>
            <li className="home">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-zhinanzhen" />
              </svg>
              首页
            </li>
            <li className="download">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-shoujixiazai" />
              </svg>
              下载App
            </li>
            <li className="navsearch">
              <NavSearch focus={focus}>
                <input
                  onFocus={() => {
                    this.setState((state) => ({
                      ...state,
                      focus: true,
                    }))
                  }}
                  onBlur={() => {
                    this.setState((state) => ({
                      ...state,
                      focus: false,
                    }))
                  }}
                  placeholder="搜索"
                />
                <SearchIcon focus={focus}>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-search" />
                  </svg>
                </SearchIcon>
                <SearchRecommend
                  focus={focus}
                  mouseIn={mouseIn}
                  onMouseEnter={() => {
                    this.setState((state) => ({
                      ...state,
                      mouseIn: true,
                    }))
                  }}
                  onMouseLeave={() => {
                    this.setState((state) => ({
                      ...state,
                      mouseIn: false,
                    }))
                  }}
                >
                  <div className="wrapper">
                    <SearchHeader>
                      <span>
                        热门搜索
                      </span>
                      <span>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-qiehuan" />
                        </svg>
                        换一换
                      </span>
                    </SearchHeader>
                    <SearchItem>
                      销售易
                    </SearchItem>
                    <SearchItem>
                      销售易
                    </SearchItem>
                    <SearchItem>
                      销售易
                    </SearchItem>
                    <SearchItem>
                      销售易
                    </SearchItem>
                    <SearchItem>
                      销售易
                    </SearchItem>
                    <SearchItem>
                      销售易
                    </SearchItem>
                    <SearchItem>
                      销售易
                    </SearchItem>
                  </div>
                </SearchRecommend>
              </NavSearch>
            </li>
            <li className="login">
              <span className="Aa">Aa</span>
              <img src="/jianshu_beta.png" alt="diamongo" height="25" />
              <span>登录</span>
            </li>
          </Nav>
          <Addition>
            <button type="button" className="register">注册</button>
            <button type="button" className="artical">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-yumaobi" />
              </svg>
              写文章
            </button>
          </Addition>
        </div>
      </Wrapper>
    )
  }
}

export default Header
