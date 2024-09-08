import img from '../../img/nav3.png'
import styled from 'styled-components'

const CardList = styled.li`
    background-color: #fff;
    list-style: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        box-shadow: 5px 5px 4px #cfcfcf;
    }
`

const ImgStyle = styled.img`
    width: 40%;
    margin-top: 16px;
`

const Name = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: #333;
`

const UserName = styled.p`
    font-size: 12px;
    color: #333;
`

export const Card = ({ user, onClick }) => {

    return (
            <CardList onClick={onClick}>
                <ImgStyle src={img} alt="画像" />
                <Name>{user.name}</Name>
                <UserName>{user.username}</UserName>
            </CardList>
    )
}