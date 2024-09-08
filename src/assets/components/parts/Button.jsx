import styled from "styled-components";

const BtnStyle = styled.button`
    background-color: #309674;
    color: #fff;
    border-radius: 8px;
    border: none;
    padding: 8px 24px;
    cursor: pointer;
    &:hover {
        background-color: #21b483;
    }
`

export const Button = ({children, className, onClick}) => {
    return (
        <BtnStyle className={className} onClick={onClick}>{children}</BtnStyle> // classNameを追加
    )
}