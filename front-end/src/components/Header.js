import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div >
            <nav className="navbar header text-white">
                <div className="container-fluid ">
                    <Link to="/" className='nav-link'>
                        <span className="navbar-brand mb-0 h1 ms-5 text-white">Health Hub</span>
                    </Link>
                    <div className='d-flex flex-row'>
                        <Link to='/login' className='p-2 nav-link'>Login</Link>
                        <Link to='/register' className='p-2 nav-link'>Register</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

