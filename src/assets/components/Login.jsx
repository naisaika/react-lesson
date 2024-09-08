import { Button } from "./parts/Button"
import styled from "styled-components"
import { useSetRecoilState } from 'recoil';
import { loginState } from "../grobalState/LoginState";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSection = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    width: 40%;
    padding-top: 40px;
    padding-bottom: 60px;
    border-radius: 8px;
`

const LoginTitle = styled.h1`
    font-size: 20px;
    color: #333;
    margin-bottom: 24px;
`

const Input = styled.input`
    padding: 8px;
    width: 70%;
    border-radius: 6px;
    border: 1px #b8b8b8 solid;
    box-sizing: border-box;
    &:focus {
        outline: 1px #979797 solid;
    }
`

const LoginButton = styled(Button)`
    margin-top: 24px;
    width: 70%;
`

const ErrorMessage = styled.p`
    color: #dd1d3d;
    font-size: 14px;
`

export const Login = () => {

    const navigate = useNavigate();

    const setIsAdmin = useSetRecoilState(loginState);
    const [idNum, setIdNum] = useState("");
    const [showError, setShowError] = useState(false);

    const inputIdNum = (e) => {
        setIdNum(e.target.value);
        setShowError(false)
    }

    const checkIsAdmin = () => {
        if (idNum === "") {
            setShowError(true);
        } else if (idNum === "admin") {
            setIsAdmin(true);
            navigate('/top');
        } else {
            setIsAdmin(false);
            navigate('/top');
        }
    }

    return (
        <LoginSection>
            <LoginTitle>ユーザー管理アプリ</LoginTitle>
            <Input type="text" placeholder="ユーザーID" value={idNum} onChange={inputIdNum}></Input>
            {showError && <ErrorMessage>ユーザーIDを入力してください</ErrorMessage>}
            <LoginButton onClick={checkIsAdmin}>ログイン</LoginButton>
        </LoginSection>
    )
}