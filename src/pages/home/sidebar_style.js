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
    display: flex;
    justify-content: space-between;
    span {
        align-items: center;
        color: #969696;
        display: flex;
        font-size: 14px;
        cursor: pointer;
    }
    svg {
        cursor: pointer;
        margin-right: 3px;
    }
`

export const AppWrapper = styled.div`
    background-color: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 30px;
    padding: 10px 22px;
    position: relative;
    width: 100%;
    img {
        height: 60px;
        margin-right: 15px;
        width: 60px;
    }
    &:hover > .code {
        display: block;
    }
    .code {
        background-color: white;
        border: 1px solid #4d647c;
        border-radius: 5px;
        bottom: calc(100% + 10px);
        display: none;
        height: 180px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 180px;
        .ankle {
            background-color: white;
            border: 1px solid #4d647c;
            bottom: 0;
            display: block;
            height: 12px;
            left: 50%;
            position: absolute;
            transform: translate(-50%, 50%) rotate(45deg);
            width: 12px;
        }
        img {
            background-color: white;
            border-radius: 5px;
            height: 100%;
            left: 0;
            margin: 0;
            overflow: hidden;
            padding: 12px;
            position: absolute;
            top: 0;
            width: 100%;
        }
    }
`

export const DownloadWrapper = styled.div`
    align-items: center;
    display: flex;
`

export const Title = styled.div`
    color: #333;
    font-size: 15px;
`

export const Description = styled.div`
    color: #999;
    font-size: 13px;
    margin-top: 4px;
`

export const More = styled.div`
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #787878;
    cursor: pointer;
    font-size: 13px;
    margin-top: 20px;
    padding: 8px 7px 8px 12px;
    text-align: center;
`
