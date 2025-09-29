import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router'
import { useState } from 'react'
import axios from 'axios'

const AdmLogin = () => {

  const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // console.log(form)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/admin/login', form);
        try {
            if (res.data.message == "Login Successfully") {
                alert("Login Successfully");
                localStorage.setItem("role", res.data.admin.role);
                localStorage.setItem("email", res.data.admin.email);
                localStorage.setItem("id", res.data.admin.id);
                localStorage.setItem("adminName",res.data.admin.name);
                window.location.href = '/admindash';
            }
            else {
                alert("Enter Correctly");
            }
        }
        catch (e) {
            alert("Server down sorry!!!");
        }
      }

  return (
    <>
      <Header />
      <div className="login-container d-flex align-items-center justify-content-center">
        <div className="login-box position-relative d-flex align-items-center justify-content-center ">
          <div className="login-cover"></div>
          <div className="login-shadow position-absolute w-100 h-100"></div>
          <div className="login-content position-relative h-100 w-100 d-flex align-items-center justify-content-center">
            <form method='post' onSubmit={handleSubmit} className='position-relative d-flex align-items-center justify-content-center flex-column'>
              <h3 className="login-logo text-white fs-1 d-flex align-items-center justify-content-center rounded-circle"><i className='fa-solid fa-key'></i></h3>
              <h2 className='fs-2 my-3 fw-semibold'>Admin Login</h2>
              <div className="login-inputbox position-relative w-100 mt-1">
                <input type="text" className='position-relative w-100 ps-4 py-2 fs-4' name='email' onChange={handleChange} required />
                <i className='fa-solid fa-user'></i>
                <span>Username</span>
              </div>
              <div className="login-inputbox position-relative w-100 mt-4">
                <input type="password" className='position-relative w-100 ps-4 py-2 fs-4' name='password' onChange={handleChange} required />
                <i className='fa-solid fa-lock'></i>
                <span>Password</span>
              </div>
              <div className="login-links mt-4">
                <Link to="/"><i className='fa-solid fa-question'></i>Forget Password</Link>
              </div>
              <div className="login-inputbox position-relative w-100 mt-3">
                <button type="submit" className='position-relative w-100 px-4 py-2 fs-4' required >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdmLogin