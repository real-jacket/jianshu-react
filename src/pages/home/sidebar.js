import React from 'react'
import AuthorItem from 'component/AuthorItem'
import {
  Wrapper, Board, AuthorWrapper, Header, AppWrapper, Title, Description, DownloadWrapper, More,
} from '@/pages/home/sidebar_style'
import { fetchList } from '@/api/author'

class HomeSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authorList: [],
    }
  }

  componentDidMount() {
    fetchList().then((res) => {
      this.setState({
        authorList: res.data.items,
      })
    }).catch((err) => {
      console.warn(err)
    })
  }

  render() {
    const { authorList } = this.state
    return (
      <Wrapper>
        {
            ['member', 'good', 'copyright', 'school'].map((name) => <Board key={name} src={`${process.env.PUBLIC_URL}/pic/home/sidebar_${name}.png`} />)
          }
        <AppWrapper>
          <div className="code">
            <span className="ankle" />
            <img src={`${process.env.PUBLIC_URL}/code.png`} alt="code" />
          </div>
          <DownloadWrapper>
            <img src={`${process.env.PUBLIC_URL}/code.png`} alt="code" />
            <div>
              <Title>下载简书手机App &#62; </Title>
              <Description>随时随地发现和创作内容</Description>
            </div>
          </DownloadWrapper>
        </AppWrapper>
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
          {
            authorList.map((item) => <AuthorItem key={`author${item.timestamp}`} detail={item} />)
          }
        </AuthorWrapper>
        <More>查看全部 &#62; </More>
      </Wrapper>
    )
  }
}

export default HomeSidebar
