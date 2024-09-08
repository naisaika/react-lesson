import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../login";
import { TopPage } from "../TopPage";
import { UserList } from "../userList";

export const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<Login />}/>
                <Route path={`/top`} element={<TopPage />}/>
                <Route path={`/user`} element={<UserList />}/>
            </Routes>
        </BrowserRouter>
    )
} 