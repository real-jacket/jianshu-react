import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Board = styled.img`
  border-radius: 4px;
  display: block;
  margin-bottom: 6px;
  min-height: 50px;
  overflow: hidden;
  width: 100%;
`
export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top: 20px;
  span{
    align-items:center;
    color: #969696;
    display:flex;
    font-size: 14px;
  }
  svg{
     margin-right: 3px;
  }
`
