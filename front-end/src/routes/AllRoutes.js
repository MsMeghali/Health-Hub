import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, PageNotFound } from '../pages';
export const AllRoutes = ({activeUser,setActiveUser}) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login activeUser={activeUser} setActiveUser={setActiveUser} />} />
                <Route path="/register" element={<Register activeUser={activeUser} setActiveUser={setActiveUser} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

