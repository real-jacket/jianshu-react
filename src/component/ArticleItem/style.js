import styled from 'styled-components'

export const Wrapper = styled.li`
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    line-height: 20px;
    min-height: 140px;
    padding: 15px 2px 20px 0;
    word-wrap: break-word;
`

export const Title = styled.h2`
    color: #333;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    margin: -7px 0 4px;
    &:visited {
        color: #969696;
    }
`
export const Content = styled.p`
    color: #999;
    font-size: 13px;
    line-height: 24px;
    margin: 0 0 8px;
`
export const Meta = styled.div`
    color: #b4b4b4;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    text-align: -webkit-match-parent;
    span {
        margin-right: 15px;
        svg {
            margin-right: 4px;
        }
    }
`

export const Img = styled.img`
    align-self: center;
    border-radius: 4px;
    display: block;
    margin-left: 10px;
    width: 150px;
`
