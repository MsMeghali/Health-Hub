import React from 'react'

export const Register = () => {
  return (
      <div className='mx-auto my-auto w-50'>
          <form className="row g-3">
              <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
              </div>
              <div className="col-md-6">
                  <label for="inputAddress" className="form-label">Patient ID</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="Patient ID"/>
              </div>
              <div className="col-md-6">
                  <label for="inputAddress2" className="form-label">Name</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Name"/>
              </div>
              <div className="col-md-6">
                  <label for="inputAddress2" className="form-label">Mobile</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Mobile" />
              </div>
              <div className="col-md-6">
                  <label for="inputAddress2" className="form-label">Aadhar</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Aadhar" />
              </div>
              <div className="col-12">
                  <label for="inputCity" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputCity" placeholder="House no, Street" />
              </div>
              <div className="col-md-6">
                  <label for="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" placeholder="City" />
              </div>
              <div className="col-md-6">
                  <label for="inputAddress2" className="form-label">Date of birth</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="YYYY/MM/DD" />
              </div>
              <div className="col-12">
                  <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
          </form>
    </div>
  )
}

