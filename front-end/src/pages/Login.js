import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [user, login] = useState({
        email: "",
        password: ""
    })

    const navigate=useNavigate();
    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'email') {
            login({ ...user, email: value });
        }
        if (name === 'password') {
            login({ ...user, password: value });
        }
    }

    function handleLogin(e) {
        e.preventDefault();
        fetch("http://localhost:8080/health-hub/login", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((d) => d.json())
            .then((d) => {
                if(d.did){
                    const name = d.name;
                    const id = d.pid;
                    sessionStorage.setItem("name", name);
                    sessionStorage.setItem("id", id);
                    navigate("/doctor");
                }
                else{
                    const name = d.name;
                    const id = d.pid;
                    sessionStorage.setItem("name", name);
                    sessionStorage.setItem("id", id);
                    navigate("/patient");
                }
            })
            .catch((e) => alert(e.name));

    }

    return (
        <div className='pages'>

            <form className='mx-auto my-auto w-50 text-white '>
                <div className="mb-3">
                    <label htmlFor='email' className="form-label">Email ID</label>
                    <input type="text" className="form-control" name="email" id="email" placeholder="Email" onChange={(e) => handleInput(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={(e) => handleInput(e)} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={(e) => handleLogin(e)}>Login</button>
                </div>
            </form>
        </div>
    )
}

