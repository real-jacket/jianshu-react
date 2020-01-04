import React from 'react'
import ArticleItem from 'component/ArticleItem'
import { fetchList } from '@/api/artical'
import { Img } from '@/pages/home/index_style'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articleList: [],
    }
  }

  componentDidMount() {
    fetchList()
      .then((res) => {
        this.setState({
          articleList: res.data.items,
        })
      })
      .catch((err) => {
        console.warn(err)
      })
  }

  render() {
    const { articleList } = this.state
    return (
      <div>
        <Img>
          <img
            src={`${process.env.PUBLIC_URL}/jianshu_home.png`}
            alt="diamongo"
          />
        </Img>
        <ul>
          {articleList.map((item) => (
            <ArticleItem
              key={`article${item.timestamp}`}
              detail={item}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
