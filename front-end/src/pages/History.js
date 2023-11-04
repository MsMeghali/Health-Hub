import React from 'react'

export const History = ({ id }) => {
    function findHistory() {
        fetch(`http://localhost:8080/health-hub/consultation/patient/${id}`,{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
        }}).then((d)=>d.json()).then((d)=>console.log(d));

      
    }
    return (
        
        <div>
            {findHistory()}
            History</div>
    )
}
