import React, { useState } from 'react'

export const FindDoctor = () => {
  const [data, setData]=useState(null);
  const [find, findDoctor] = useState({
    city: "",
    speciality: ""
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "city") {
      findDoctor({ ...find, city: value });
    }
    if (name == "speciality") {
      findDoctor({ ...find, speciality: value });
    }
  }

  function fetchDetails(e) {
    e.preventDefault();
    fetch(`http://localhost:8080/health-hub/doctor/search?city=${find.city}&speciality=${find.speciality}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((d) => d.json()).then((d) => setData(d));
      
  }

  return (
    <div >
      <div className="input-group mt-3 w-75 mx-auto">
        <span className="input-group-text">City</span>
        <input type="text " aria-label="City" className="form-control " value={find.city} name="city" onChange={handleChange} />
        <span className="input-group-text">Speciality</span>
        <input type="text" aria-label="Speciality" className="form-control " value={find.speciality}  name="speciality" onChange={handleChange} />
      </div>

      <button className='d-grid gap-2  mx-auto m-4' onClick={(e) => fetchDetails(e)}>Search</button>
      {
        data == null ? null :<div>{
          data.length!=0?
            <table className="table w-75 mx-auto">
            <thead>
              <tr>
                <th scope="col">Doctor Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Speciality</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((t)=>{
                  return(
                    <tr key={t.did}>
                      <th scope="row">{t.did}</th>
                      <td>{t.name}</td>
                      <td>{t.email}</td>
                      <td>{t.mobile}</td>
                      <td>{t.address}</td>
                      <td>{t.city}</td>
                      <td>{t.speciality}</td>
                    </tr>
                  );
                })
                
              }
              
            </tbody>
          </table>:
            <p className='d-flex justify-content-center'>No Data found</p>}
          </div>
      }
    </div>


  )
}
