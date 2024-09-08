import styled from 'styled-components';

const FooterStyle = styled.div`
    width: 100%;
    height: 50px;
    font-size: 10px;
    background-color: #559d84;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    color: #fff;
`

export const Footer = () => {

    return (
        <FooterStyle>
            &copy; jake-project 2024
        </FooterStyle>
    )
}