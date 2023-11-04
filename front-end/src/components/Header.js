import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
    const id=sessionStorage.getItem("id");
    const navigate=useNavigate();
    function logout(){
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("type");
        sessionStorage.removeItem("id");
        //setActiveUser({ type: null, id: null, name: null });
        navigate('/', {replace:true});
    }
    return (
        <div >
            <nav className="navbar header text-white">
                <div className="container-fluid ">
                    <Link to="/" className='nav-link'>
                        <span className="navbar-brand mb-0 h1 ms-5 text-white">Health Hub</span>
                    </Link>
                    {
                        id == null ?
                            <div className='d-flex flex-row'>
                                <Link to='/login' className='p-2 nav-link'>Login</Link>
                                <Link to='/register' className='p-2 nav-link'>Register</Link>
                            </div> :
                            <div>
                                <p>{sessionStorage.getItem("name")}</p>
                                <button onClick={logout} >Logout</button> 
                            </div>
                    }
                </div>
            </nav>
        </div>
    )
}

