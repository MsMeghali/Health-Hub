import React, { useEffect, useState } from 'react'

export const History = () => {
    const id=sessionStorage.getItem("id");
    const [data, setData]=useState(null);
    function findHistory() {
        fetch(`http://localhost:8080/health-hub/consultation/patient/${id}`,{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
        }}).then((d)=>d.json()).then((d)=>setData(d));

      
    }

    useEffect(()=>{
        findHistory();
    },[]);

    return (
        <div>
            {
                data==null?null:<div>
                    <table className="table w-75 mx-auto">
                        <thead>
                            <tr>
                                <th scope="col">Consultation Id</th>
                                <th scope="col">Doctor Id</th>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Diagnosis</th>
                                <th scope="col">Prognosis</th>
                                <th scope="col">Medicines</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.patientConsultations.map((d)=>{
                                    return <tr key={d.consultation.cid}>
                                        <td>{d.consultation.cid}</td>
                                        <td>{d.doctor.did}</td>
                                        <td>{d.doctor.name}</td>
                                        <td>{d.consultation.date}</td>
                                        <td>{d.consultation.diagnosis}</td>
                                        <td>{d.consultation.prognosis}</td>
                                        <td>{d.consultation.medicines}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}
