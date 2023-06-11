import React from 'react'

const Signin = () => {
  return (
    <div  style={{marginTop:"70px"}}>
        <div className="row align-items-center g-lg-5 py-5 px-3">
        <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="c0hzt" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="kkvn7q" />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> 
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" fdprocessedid="tf96f">Sign up</button>
          <hr className="my-4" />
          <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>

      <div className="col-lg-6 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      
    </div>


    </div>
  )
}

export default Signin