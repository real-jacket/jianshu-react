import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    margin-top: 15px;
`
export const Avatar = styled.img`
    border-radius: 50%;
    cursor: pointer;
    height: 48px;
    margin-right: 10px;
    width: 48px;
`

export const Description = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    span {
        color: #969696;
        font-size: 12px;
    }
`

export const Action = styled.div`
    align-self: flex-start;
    color: #42c02e;
    cursor: pointer;
    font-size: 13px;
    margin-top: 12px;
`

export const AuthorName = styled.div`
    color: #333;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 5px;
`
