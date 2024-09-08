import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from 'recoil';
import { getUserState } from "../../grobalState/GetUserState";

export const useGetUserHook = () => {
    const setGetUsers = useSetRecoilState(getUserState);

    useEffect(() => {
        const getData = async() => {
            try {
                const resData = await axios.get('https://jsonplaceholder.typicode.com/users');
                setGetUsers(resData.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        getData();
    }, [setGetUsers]); 
};