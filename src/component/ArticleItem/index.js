import React from 'react'
import {
  Img, Wrapper, Title, Content, Meta,
} from 'component/ArticleItem/style'

function ArticleItem(props) {
  const { detail } = props
  return (
    <Wrapper>
      <div>
        <Title>{detail.title}</Title>
        <Content>{detail.content_short}</Content>
        <Meta>
          <span style={{ color: '#ea6f5a' }}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-diamond" />
            </svg>
            {detail.integrate}
          </span>
          <span>
            {detail.author}
          </span>
          <span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-comments" />
            </svg>
            {detail.comment_num}
          </span>
          <span>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-heart" />
            </svg>
            {detail.like_point}
          </span>
        </Meta>
      </div>
      {
        detail.image_uri && (
        <Img
          alt="暂时找不到图片"
          // src={`${process.env.PUBLIC_URL}/jianshu_article.jpg`}
          src={`${process.env.PUBLIC_URL}${detail.image_uri}`}
        />
        )
      }
    </Wrapper>
  )
}

export default ArticleItem
