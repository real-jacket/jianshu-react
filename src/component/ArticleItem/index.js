import React from 'react'
import {
  Img, Wrapper, Title, Content, Meta,
} from 'component/ArticleItem/style'

function ArticleItem() {
  return (
    <Wrapper>
      <div>
        <Title>山药饼，五十岁女人的绝佳早餐</Title>
        <Content>这个清晨，阳光明媚，身体却有点不适，女人呀，到了一定年纪就是麻烦。 再烦，早餐还是要吃的，早餐是一天中最不轻易转变成脂肪的一餐，据说日本的相扑运...</Content>
        <Meta>
          草草啖盐说蜜
        </Meta>
      </div>
      <Img
        alt="找不到图片"
        src={`${process.env.PUBLIC_URL}/jianshu_article.jpg`}
      />
    </Wrapper>
  )
}

export default ArticleItem
