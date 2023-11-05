import React, { useState } from "react";
import { RegisterPatient } from "./RegisterPatient";
import { RegisterDoctor } from "./RegisterDoctor";
export function Register() {
    const [active, setActive] = useState("patient");
    return (<div className="pages">
        <center>
            <p className="text-white">Register here</p>
            <div className="d-grid gap-2 mt-3 w-25 " >
                <button className="btn btn-primary " type="button" onClick={() => setActive("patient")}>Patient</button>
                <button className="btn btn-primary" type="button" onClick={() => setActive("doctor")}>Doctor</button>
            </div>
            {active === 'patient' && (<RegisterPatient />)}
            {active === 'doctor' && (<RegisterDoctor />)}
        </center>
    </div>)
}