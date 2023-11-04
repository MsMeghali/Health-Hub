import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, PageNotFound, FindDoctor, History } from '../pages';
import { PatientPage } from '../pages/PatientPage';
export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='patient' element={<PatientPage />} />
                <Route path="*" element={<PageNotFound />} />
                
            </Routes>
        </div>
    )
}

