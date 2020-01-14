import React from 'react'
import {
  Avatar,
  Wrapper,
  Description,
  Action,
  AuthorName,
} from 'component/AuthorItem/style'

function AuthorItem(props) {
  const { detail } = props
  return (
    <Wrapper>
      <Avatar
        src={`${process.env.PUBLIC_URL}/pic/avatar/avatar_${detail.avatar}.jpg`}
        alt="暂未找到图片"
      />
      <Description>
        <AuthorName>{detail.author}</AuthorName>
        <span>
          写了
          {detail.write}
          k字&nbsp;·&nbsp;
          {detail.like}
          k喜欢
        </span>
      </Description>
      <Action> +关注 </Action>
    </Wrapper>
  )
}

export default AuthorItem
