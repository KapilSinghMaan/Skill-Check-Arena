import React, { useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import student from '../../assets/images/student.png'
import { Link, Outlet } from 'react-router'

const StuDashboard = () => {

  useEffect(() => {
    let smallbig = document.getElementById('smallbig');
    let dashleft = document.querySelector('.dashboard-left');
    let dashright = document.querySelector('.dashboard-right');

    smallbig.onclick = function () {
      dashleft.classList.toggle('active');
      dashright.classList.toggle('active');
    }

  }, [])

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row m-0 d-flex">

          <div className="dashboard-left p-0">
            <div className="dashboard-logo py-3 d-flex align-items-center justify-content-center">
              <img src={logo} alt="" height={60} />
            </div>
            <ul className='list-unstyled fs-3'>
              <li className='my-3 d-flex'><Link to="/studash/" className='d-flex align-items-center text-decoration-none text-dark w-100'><i className='my-3 fa-regular fa-house'></i> <span className='dash-text '>Home</span></Link></li>
              <li className='my-3 d-flex'><Link to="/studash/availablequiz" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-clipboard-list'></i> <span className='dash-text '>Available Quiz</span></Link></li>
              <li className='my-3 d-flex'><Link to="/studash/myattempts" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-list-check'></i> <span className='dash-text '>My Attempts</span></Link></li>
              <li className='my-3 d-flex'><Link to="/studash/quizinprocess" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-file-upload'></i> <span className='dash-text '>Quiz In Process</span></Link></li>
              <li className='my-3 d-flex'><Link to="/studash/results" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-chart-line'></i> <span className='dash-text '>Results</span></Link></li>
              <li className='my-3 d-flex'><Link to="/studash/studiscussion" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fa-regular fa-circle-question'></i> <span className='dash-text '>Discussion Forum</span></Link></li>
              <li className='my-3 d-flex'><Link to="/studash/stuprofilesetting" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-bell'></i> <span className='dash-text '>Profile Setting</span></Link></li>
            </ul>

            <div className="dash-logout fs-3 mt-3 d-flex align-items-center justify-content-center"><Link to="/student" className="text-decoration-none text-dark"><i class="fa-solid fa-right-from-bracket"></i> <span>LOGOUT</span></Link></div>

          </div>
          <div className="dashboard-right p-0 active m-0">
            <div className="position-sticky z-1 row m-2 dash-right-header d-flex align-items-center rounded-4 shadow">
            <i className='fas fa-bars fs-1 position-absolute m-3 cursor-pointer' id='smallbig'></i>
              <div className="col-sm-4 p-0"><p className='ms-5 m-0 ps-4 fs-3'>Hello,Your name name</p></div>
              <div className="col-sm-4 border p-0"><input type="text" className='w-100' /></div>
              <div className="col-sm-2 offset-2">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle fs-5 d-flex align-items-center justify-content-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="rounded-circle dashboard-owner" style={{
                      backgroundImage: `url(${student})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    ></div> Student
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Change Password</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row Dashboard-outlet">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StuDashboard