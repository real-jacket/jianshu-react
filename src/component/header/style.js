import styled from 'styled-components'

export const Wrapper = styled.nav`
    border-bottom:1px solid #f0f0f0;
    .header{
        display:flex;
        height:58px;
        justify-content:center;
        margin: 0 auto;
        max-width: 1440px;
        min-width: 768px;
    }
`

export const Logo = styled.div`
    height:100%;
    width:100%;
    img{
        height:100%;
        width:100px;
    }
`

export const Nav = styled.ul`
    display:flex;
    flex-shrink:0;
    height:100%;
    width:960px;
    li{
        align-items:center;
        display:flex;
        font-size:17px;
        margin-right:10px;
        padding:15px;
        &:not(:last-child){
            cursor: pointer;
            flex-shrink:0;
        }
    }
    svg{
        height:20px;
        margin-right:4px;
        width:20px;
    }
    .home{
        color:#ea6f5a;
        font-size:17px;
    }
    .download:hover{
        background:#f5f5f5;
    }
    .navsearch{
        padding:0 0 0 15px;
    }
    .login{
        display:flex;
        flex-grow:1;
        justify-content:flex-end;
        margin:0;
        padding:0;
        width:100%;
        >*{
            cursor: pointer;
        }
        span{
            color: #969696;
            font-size: 15px;
            font-weight:400;
            margin: 0 6px 0 10px;
            padding:0 12px;
            &.Aa{
                font-size:18px;
            }
        }
    }
`

export const NavSearch = styled.div`
    align-items:center;
    display:flex;
    height:38px;
    position:relative;
    transition:all ease 0.5s;
    width:${(props) => (props.focus ? '320px' : '240px')};
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
    background: ${(props) => (props.focus ? '#969696' : '')};
    border-radius:50%;
    display:flex;
    height:30px;
    justify-content:center;
    position:absolute;
    right:5px;
    top:4px;
    width:30px;
    svg{
        color:${(props) => (props.focus ? 'white' : '#969696')};
        height:18px;
        margin:1px;
        width:17px;
    }
`

export const SearchRecommend = styled.div`
    background:#fff;
    border-radius:4px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    display:${(props) => (props.focus || props.mouseIn ? 'block' : 'none')} ;
    left:0;
    margin-top:9px;
    position:absolute;
    top:100%;
    width:250px;
    z-index:1;
    &::before{
        background:#fff;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
        content: "";
        height: 10px;
        left: 27px;
        position:absolute;
        top: -5px;
        transform: rotate(45deg);
        width: 10px;
        z-index:-1;
    }
    .wrapper{
        background:#fff;
        border-bottom:1px solid #f0f0f0;
        padding:20px 20px 10px 20px;
        width:100%;
    }
    
`
export const SearchHeader = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
    span{
        align-items:center;
        color: #969696;
        display:flex;
        font-size: 14px;
    }
`
export const SearchItem = styled.span`
    border:1px solid #dddddd;
    border-color: #b4b4b4;
    border-radius:3px;
    color: #787878;
    display:inline-block;
    font-size:12px;
    line-height:15px;
    margin:0 10px 12px 0;
    padding: 2px 6px;
`

export const Addition = styled.div`
    align-items:center;
    display:flex;
    height:100%;
    justify-content:flex-end;
    width:100%;
    button{
        background:white;
        border:1px solid rgba(236,97,73,.7);
        border-radius:20px;
        cursor: pointer;
        font-size:15px;
        height:38px;
        margin:0 12px;
        outline:none;
        padding:6px 12px;
        &.register{
            color:#ea6f5a;
            width:80px;
        }
        &.artical{
            align-items:center;
            background:#ec6149;
            color:white;
            display:flex;
            svg{
                height:20px;
                margin-right:4px;
                width:20px;
            }
        }
    }
`
