import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    width: 100%;
    height: 50px;
    font-size: 14px;
    background-color: #559d84;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    color: #fff;
    padding: 0 24px;
`

const HeaderTitle = styled.h1`
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`

const HeaderMenu = styled.div`
    display: flex;
    margin-left: 24px;
`

const HeaderMenuList = styled.p`
    margin-right: 16px;
    cursor: pointer;
`

export const Header = () => {
    const navigate = useNavigate();

    const BackTopPage = () =>{
        navigate('/top');
    }

    const GoToUserList = () =>{
        navigate('/user');
    }

    return (
        <HeaderStyle>
            <HeaderTitle onClick={BackTopPage}>ユーザー管理アプリ</HeaderTitle>
            <HeaderMenu>
                <HeaderMenuList onClick={GoToUserList}>ユーザー一覧</HeaderMenuList>
                <HeaderMenuList>設定</HeaderMenuList>
            </HeaderMenu>
        </HeaderStyle>
    )
}