import React from 'react'
import { connect } from 'react-redux'
import {
  onFocus, onMoveEnter, onBlur, onMoveOut,
} from '@/store/header/actions'
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

function Header(props) {
  const {
    focused, mouseIn, handleInputBluer, handleInputFocus, handleMouseEnter, handleMouseOut,
  } = props
  return (
    <Wrapper>
      <div className="header">
        <Logo>
          <img src={`${process.env.PUBLIC_URL}/jianshu_log.png`} alt="Nav logo" />
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
            <NavSearch focus={focused}>
              <input
                onFocus={() => {
                  handleInputFocus()
                }}
                onBlur={() => {
                  handleInputBluer()
                }}
                placeholder="搜索"
              />
              <SearchIcon focus={focused}>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-search" />
                </svg>
              </SearchIcon>
              <SearchRecommend
                focus={focused}
                mouseIn={mouseIn}
                onMouseEnter={() => {
                  handleMouseEnter()
                }}
                onMouseLeave={() => {
                  handleMouseOut()
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
            <img src={`${process.env.PUBLIC_URL}/jianshu_beta.png`} alt="diamongo" height="25" />
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

const mapStateToProps = (state /* , ownProps */) => ({
  focused: state.getIn(['header', 'focused']),
  mouseIn: state.getIn(['header', 'mouseIn']),
})

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus() {
    dispatch(onFocus())
  },
  handleInputBluer() {
    dispatch(onBlur())
  },
  handleMouseEnter() {
    dispatch(onMoveEnter())
  },
  handleMouseOut() {
    dispatch(onMoveOut())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
