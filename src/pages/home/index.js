import React from 'react'
import ArticleItem from 'component/ArticleItem'
import { fetchList } from '@/api/artical'
import { Img } from '@/pages/home/index_style'

class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log('执行到这里')
    fetchList().then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <Img>
          <img src={`${process.env.PUBLIC_URL}/jianshu_home.png`} alt="diamongo" />
        </Img>
        <ul>
          <ArticleItem />
        </ul>
      </div>
    )
  }
}

export default Home
