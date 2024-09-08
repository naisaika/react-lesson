import { useState } from "react";
import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"
import { Main } from "./layout/Main"
import { Card } from "./parts/Card"
import { CardModal } from "./parts/CardModal";
import { useRecoilValue } from "recoil";
import { getUserState } from "../grobalState/GetUserState";
import { useGetUserHook } from "./CustomHook/GetUserHook";
import styled from 'styled-components'

const CardContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    padding-left: 0;
    text-align: center;
`

export const UserList = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [getUserId, setGetUserId] = useState(null)

    useGetUserHook();

    const getUsers = useRecoilValue(getUserState);

    const handleModalOpen = (userId) => {
        setModalOpen(true)
        setGetUserId(userId)
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    return (
        <>
        <Header/>
        <Main>
            <CardContainer>
                {getUsers.map((user) => (
                        <Card 
                            key={user.id} 
                            user={user} 
                            onClick={() => handleModalOpen(user.id)} // user.idを渡す
                        />
                    ))}
                {modalOpen && <CardModal getUserId={getUserId} modalClose={handleModalClose}/>}
            </CardContainer>
        </Main>
        <Footer/>
        </>
    )
}
