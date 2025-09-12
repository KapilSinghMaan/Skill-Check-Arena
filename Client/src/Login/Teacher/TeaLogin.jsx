import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router'

const TeaLogin = () => {
  return (
    <>
      <Header />
      <div className="login-container d-flex align-items-center justify-content-center">
        <div className="login-box position-relative d-flex align-items-center justify-content-center ">
          <div className="login-cover"></div>
          <div className="login-shadow position-absolute w-100 h-100"></div>
          <div className="login-content position-relative h-100 w-100 d-flex align-items-center justify-content-center">
            <form className='position-relative d-flex align-items-center justify-content-center flex-column'>
              <h3 className="login-logo text-white fs-1 d-flex align-items-center justify-content-center rounded-circle"><i className='fa-solid fa-key'></i></h3>
              <h2 className='fs-2 my-3 fw-semibold'>Teacher Login</h2>
              <div className="login-inputbox position-relative w-100 mt-1">
                <input type="text" className='position-relative w-100 ps-4 py-2 fs-4' required />
                <i className='fa-solid fa-user'></i>
                <span>Username</span>
              </div>
              <div className="login-inputbox position-relative w-100 mt-4">
                <input type="password" className='position-relative w-100 ps-4 py-2 fs-4' required />
                <i className='fa-solid fa-lock'></i>
                <span>Password</span>
              </div>
              <div className="login-links mt-4">
                <Link to="/"><i className='fa-solid fa-question'></i>Forget Password</Link>
                <Link to="/teareg"><i className='fa-solid fa-user-plus'></i>Sign Up</Link>
              </div>
              <div className="login-inputbox position-relative w-100 mt-3">
                <Link to="/teadash/"><input type="submit" value="Login" className='position-relative w-100 px-4 py-2 fs-4' /></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeaLogin