import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, PageNotFound } from '../pages';
import { PatientPage } from '../pages/PatientPage';
import { DoctorPage } from '../pages/DoctorPage';
export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/patient' element={<PatientPage />} />
                <Route path='/doctor' element={<DoctorPage />} />
                <Route path="*" element={<PageNotFound />} />
                
            </Routes>
        </div>
    )
}

