import React, { useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import { Link, Outlet } from 'react-router'

const TeaDashboard = () => {

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
              <li className='my-3 d-flex'><Link to="/teadash/" className='d-flex align-items-center text-decoration-none text-dark w-100'><i className='my-3 fa-regular fa-house'></i> <span className='dash-text '>Home</span></Link></li>
              <li className='my-3 d-flex'><Link to="/teadash/createquiz" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-clipboard-list'></i> <span className='dash-text '>Create Quiz</span></Link></li>
              <li className='my-3 d-flex'><Link to="/teadash/managequiz" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-list-check'></i> <span className='dash-text '>Manage Quizzes</span></Link></li>
              <li className='my-3 d-flex'><Link to="/teadash/submission" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-file-upload'></i> <span className='dash-text '>Submission</span></Link></li>
              <li className='my-3 d-flex'><Link to="/teadash/analytics" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-chart-line'></i> <span className='dash-text '>Analytics</span></Link></li>
              <li className='my-3 d-flex'><Link to="/teadash/questionbank" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fa-regular fa-circle-question'></i> <span className='dash-text '>Question Bank</span></Link></li>
              <li className='my-3 d-flex'><Link to="/teadash/notification" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-bell'></i> <span className='dash-text '>Notification</span></Link></li>
              <li className='my-3 d-flex'><Link to="/teadash/profilesetting" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-user-gear'></i> <span className='dash-text '>Profile Setting</span></Link></li>
              <li className='my-3 d-flex'><Link to="/teadash/feedback" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-comments'></i> <span className='dash-text '>Feedback</span></Link></li>
            </ul>

            <div className="dash-logout fs-3 mt-3 d-flex align-items-center justify-content-center"><Link to="/teacher" className="text-decoration-none text-dark"><i class="fa-solid fa-right-from-bracket"></i> <span>LOGOUT</span></Link></div>

          </div>
          <div className="dashboard-right p-0 active m-0">
            <i className='fas fa-bars fs-1 position-absolute m-3' id='smallbig'></i>
            <div className="row m-2 dash-right-header d-flex align-items-center rounded-4 shadow">
              <div className="col-sm-4 p-0"><p className='ms-5 m-0 ps-4 fs-3'>Hello,Your name name</p></div>
              <div className="col-sm-4 border p-0"><input type="text" className='w-100' /></div>
            </div>
            <div className="row Dashboard-outlet">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeaDashboard