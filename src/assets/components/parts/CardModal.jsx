import { useRecoilValue } from 'recoil';
import { loginState } from "../../grobalState/LoginState";
import { useState } from 'react';
import { useGetUserHook } from "../CustomHook/GetUserHook";
import { getUserState } from "../../grobalState/GetUserState";
import styled from 'styled-components';
import { Button } from './Button';

const ModalSection = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 10;
    padding: 8px 24px;
    border-radius: 5px;
    width: 35%;
    display: flex;
    flex-direction: column;
`
const TitleSection = styled.div`
    display: flex;
    position: relative;
`

const ModalTitle = styled.p`
    margin: 0;
    text-align: left;
    font-weight: bold;
`

const CloseIcon = styled.span`
    width: 18px;
    height: 2px;
    background-color: #333;
    transform: rotate(45deg);
    position: absolute;
    top: 8px;
    right: -10px;
`

const CloseIcon2 = styled.span`
    width: 18px;
    height: 2px;
    background-color: #333;
    transform: rotate(-45deg);
    position: absolute;
    top: 8px;
    right: -10px;
`

const DetailSection = styled.dl`
    margin-left: 24px;
`
const Detail = styled.dd`
    margin-left: 4px;
`

const Input = styled.input`
    width: 90%;
    padding: 6px;
    border-radius: 6px;
    border: 1px #b8b8b8 solid;
    box-sizing: border-box;
    margin: 8px 0 12px;
`

const EditButton = styled(Button)`
    text-align: right;
    align-self: flex-end;
    margin-bottom: 16px;
`


export const CardModal = ({modalClose, getUserId}) => {

    useGetUserHook();

    const getUsers = useRecoilValue(getUserState);

    const user = getUsers.find((user) => user.id === getUserId)
  

    const isAdmin = useRecoilValue(loginState);
    const [isEdit, setIsEdit] = useState(true)
    const [editText, setEditText] = useState({
        username: user?.username || "",
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
    });


    const editNewText = (e) => {
        setEditText({...editText,[e.target.name]: e.target.value});
    }

    const enableEdit = () => {
        setIsEdit(false);
    };

    return (
        <ModalSection>
            <TitleSection>
                <ModalTitle>ユーザー詳細</ModalTitle>
                <div onClick={modalClose}>
                    <CloseIcon></CloseIcon>
                    <CloseIcon2></CloseIcon2>
                </div>
            </TitleSection>
            <DetailSection>
                <dt>名前</dt>
                <Detail>
                    <Input type="text" name="username" value={editText.username} readOnly={isEdit} onChange={editNewText} />
                </Detail>
                <dt>フルネーム</dt>
                <Detail>
                    <Input type="text" name="name" value={editText.name} readOnly={isEdit} onChange={editNewText} />
                </Detail>
                <dt>MAIL</dt>
                <Detail>
                    <Input type="text" name="email" value={editText.email} readOnly={isEdit} onChange={editNewText} />
                </Detail>
                <dt>TEL</dt>
                <Detail>
                    <Input type="text" name="phone" value={editText.phone} readOnly={isEdit} onChange={editNewText} />
                </Detail>
            </DetailSection>
            {isAdmin && <EditButton onClick={enableEdit}>編集</EditButton>}
        </ModalSection>
    );
};