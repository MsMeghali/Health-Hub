import React, { useState } from "react";
import {ConsultPatient} from "./ConsultPatient";
import { Record } from "./Record";
export function DoctorPage() {
    const [active, setActive] = useState("consult");
    return (
        <div>
            <div className="d-grid gap-2 d-flex justify-content-center mt-3">
                <button className="btn btn-primary " type="button" onClick={() => setActive("consult")}>Consult Patient</button>
                <button className="btn btn-primary" type="button" onClick={() => setActive("record")}>History</button>
            </div>
            {active === 'consult' && (<ConsultPatient/>) }
            {active === 'record' && (<Record/>) } 
        </div>
    );
}