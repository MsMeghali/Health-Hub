import React, { useState } from 'react'

export const Login = ({activeUser, setActiveUser}) => {
    const [user, login]=useState({
        email:"",
        password:""
    })

    function handleInput(e){
        const name=e.target.name;
        const value=e.target.value;
        if(name=== 'email'){
            login({ ...user, email: value });
        }
        if(name==='password'){
            login({ ...user, password: value });
        }
    }

    function handleLogin(e){
        e.preventDefault();
        fetch("http://localhost:8080/health-hub/login", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((data)=>data.json()).then((d)=>{
            console.log(d)
            const name=d.name;
            const id=d.pid;
            const type="patient";
            setActiveUser({type:type, id: id, name:name});
            
        }).catch((e) => console.log(e));

    }

    return (
        <div className='pages'>
         
            <form className='mx-auto my-auto w-50 text-white '>
                <div className="mb-3">
                    <label htmlFor='email' className="form-label">Email ID</label>
                    <input type="text" className="form-control" name="email" id="email" placeholder="Email" onChange={(e)=>handleInput(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={(e)=>handleInput(e)}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={(e)=>handleLogin(e)}>Login</button>
                </div>
            </form>
        </div>
    )
}

