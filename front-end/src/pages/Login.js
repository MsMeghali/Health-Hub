import React from 'react'

export const Login = () => {
    return (
        <div className='mx-auto my-auto w-50'>
         
            <form >
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Email ID</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

