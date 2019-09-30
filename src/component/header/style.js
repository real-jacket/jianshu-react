import styled from 'styled-components'

export const Wrapper = styled.nav`
    align-items:center;
    border-bottom:1px solid #f0f0f0;
    display:flex;
    height:58px;
    justify-content:space-between;
    margin: 0 auto;
    max-width: 1440px;
    min-width: 768px;
`

export const Logo = styled.div`
    height:100%;
    min-width:194.5px;
    img{
        height:100%;
        width:100px;
    }
`

export const Nav = styled.ul`
    display:flex;
    flex-grow:1;
    height:100%;
    width:960px;
    li{
        font-size:17px;
        margin-right:10px;
        padding:15px;
        display:flex;
        align-items:center;
    }
    .home{
        color:#ea6f5a;
    }
    .navsearch{
        padding:0 0 0 15px;
    }
`
export const NavSearch = styled.div`
    align-items:center;
    display:flex;
    height:38px;
    position:relative;
    width:175px;
    input{
        background:#eee;
        border:none;
        border-radius:40px;
        line-height:38px;
        outline:none;
        padding:0 40px 0 20px;
        vertical-align:middle;
        width:100%;
        &::placeholder{
            color:#a0a0a0;
        }
    }
`

export const SearchIcon = styled.div`
    align-items:center;
    display:flex;
    height:30px;
    justify-content:center;
    position:absolute;
    right:5px;
    top:4px;
    width:30px;
    svg{
        color:#a0a0a0;
        height:18px;
        margin:1px;
        width:17px;
    }
`

export const Addition = styled.div`
    background:yellow;
    height:100%;
    min-width:194.5px;
`
