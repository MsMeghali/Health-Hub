import React, { useState } from 'react'

export const Register = () => {
    const [user, doRegister]=useState({
        email:"",
        password:"",
        pid:"",
        name:"",
        mobile:"",
        aadhar:"",
        address:"",
        city:"",
        dob:""
    })
    function handleInput(e){
        const name=e.target.name;
        const value=e.target.value;
        if(name==="email"){
            doRegister({...user, email:value});
        }
        if (name === "password") {
            doRegister({ ...user, password: value });
        }
        if (name === "pid") {
            doRegister({ ...user, pid: value });
        }
        if (name === "name") {
            doRegister({ ...user, name: value });
        }
        if (name === "mobile") {
            doRegister({ ...user, mobile: value });
        }
        if (name === "aadhar") {
            doRegister({ ...user, aadhar: value });
        }
        if (name === "address") {
            doRegister({ ...user, address: value });
        }
        if (name === "city") {
            doRegister({ ...user, city: value });
        }
        if (name === "dob") {
            doRegister({ ...user, dob: value });
        }
    }
    function handleRegister(e) {
        e.preventDefault();
        console.log(user)
        fetch("http://localhost:8080/health-hub/register/patient", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(e=>e.text()).then(e=>{
            alert(e);
            if (e ==="Successfully registered"){
                sessionStorage.setItem("name", user.nameame);
                sessionStorage.setItem("type", "patient");
                sessionStorage.setItem("id", user.pid);
               // setActiveUser({ type: "patient", id: user.pid, name: user.name })
            }
        });

    }
    return (
        <div className=' pages'>
            <form className="row g-3 mx-auto my-auto w-50 text-white">
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={(e) => handleInput(e)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={(e) => handleInput(e)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="pid" className="form-label">Patient ID</label>
                    <input type="text" className="form-control" id="pid" name="pid" placeholder="Patient ID" onChange={(e) => handleInput(e)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={(e) => handleInput(e)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile" onChange={(e) => handleInput(e)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="aadhar" className="form-label">Aadhar</label>
                    <input type="text" className="form-control" id="aadhar" name="aadhar" placeholder="Aadhar" onChange={(e) => handleInput(e)} />
                </div>
                <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" placeholder="House no, Street" onChange={(e) => handleInput(e)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city" placeholder="City" onChange={(e) => handleInput(e)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="dob" className="form-label">Date of birth</label>
                    <input type="text" className="form-control" id="dob" name="dob" placeholder="YYYY/MM/DD" onChange={(e) => handleInput(e)} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={(e)=>handleRegister(e)}>Sign in</button>
                </div>
            </form>
        </div>
    )
}

