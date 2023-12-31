import React, { useState } from "react";
import { FindDoctor } from "./FindDoctor";
import { History } from "./History";
export function PatientPage(){
    const [active, setActive]=useState("find");
    return(<div>
        <div className="d-grid gap-2 d-flex justify-content-center mt-3">
            <button className="btn btn-primary " type="button" onClick={() => setActive("find")}>Find Doctor</button>
            <button className="btn btn-primary" type="button" onClick={() => setActive("history")}>History</button>
        </div>
        {active === 'find' && (<FindDoctor />)}
        {active === 'history' && (<History/>)}
    </div>)
}