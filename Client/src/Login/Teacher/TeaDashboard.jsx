import React, { useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router'

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
              <li className='my-3 d-flex'><Link to="/teahome" className='d-flex align-items-center text-decoration-none text-dark w-100'><i className='my-3 fa-regular fa-house'></i> <span className='dash-text '>Home</span></Link></li>
              <li className='my-3 d-flex'><Link to="/createquiz" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-clipboard-list'></i> <span className='dash-text '>Create Quiz</span></Link></li>
              <li className='my-3 d-flex'><Link to="/managequiz" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-list-check'></i> <span className='dash-text '>Manage Quizzes</span></Link></li>
              <li className='my-3 d-flex'><Link to="/submission" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-file-upload'></i> <span className='dash-text '>Submission</span></Link></li>
              <li className='my-3 d-flex'><Link to="/analytics" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-chart-line'></i> <span className='dash-text '>Analytics</span></Link></li>
              <li className='my-3 d-flex'><Link to="/questionbank" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fa-regular fa-circle-question'></i> <span className='dash-text '>Question Bank</span></Link></li>
              <li className='my-3 d-flex'><Link to="/notification" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-bell'></i> <span className='dash-text '>Notification</span></Link></li>
              <li className='my-3 d-flex'><Link to="/profilesetting" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-user-gear'></i> <span className='dash-text '>Profile Setting</span></Link></li>
              <li className='my-3 d-flex'><Link to="/feedback" className="d-flex align-items-center text-decoration-none text-dark w-100"><i className='my-3 fas fa-comments'></i> <span className='dash-text '>Feedback</span></Link></li>
            </ul>

            <div className="dash-logout btn fs-3 mt-3 d-flex align-items-center justify-content-center"><i class="fa-solid fa-right-from-bracket"></i> <span>LOGOUT</span></div>

          </div>
          <div className="dashboard-right p-0 active m-0">
            <i className='fas fa-bars fs-1 position-absolute m-3' id='smallbig'></i>
            <div className="row m-2 dash-right-header d-flex align-items-center rounded-4 shadow">
              <div className="col-sm-4 p-0"><p className='ms-5 m-0 ps-4 fs-3'>Hello,Your name name</p></div>
              <div className="col-sm-4 border p-0"><input type="text" className='w-100' /></div>
            </div>
            <div className="row">
              <div class="m-0 d-flex align-items-center justify-content-center position-relative flex-wrap gap-5">
                <div class="dash-card mt-4 position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4">
                  <div class="imgbox d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-user text-white"></i>
                  </div>
                  <div class="content position-absolute p-0 w-100">
                    <h3>No of Quiz Created: 100</h3>
                    <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tenetur reiciendis illum </p>
                    <Link to="/" class="text-decoration-none text-dark">Read More</Link>
                  </div>
                </div>
                <div class="dash-card mt-4 position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4">
                  <div class="imgbox d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-question text-white"></i>
                  </div>
                  <div class="content position-absolute px-4 w-100">
                    <h2>No of Question</h2>
                    <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tenetur reiciendis illum qui quia vel</p>
                    <Link to="/" class="text-decoration-none text-dark">Read More</Link>
                  </div>
                </div>
                <div class="dash-card mt-4 position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4" >
                  <div class="imgbox d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-comments text-white"></i>
                  </div>
                  <div class="content position-absolute px-4 w-100">
                    <h2>No of Feedback</h2>
                    <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tenetur reiciendis illum</p>
                    <Link to="/" class="text-decoration-none text-dark">Read More</Link>
                  </div>
                </div>
                <div class="dash-card position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4" >
                  <div class="imgbox d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-comments text-white"></i>
                  </div>
                  <div class="content position-absolute px-4 w-100">
                    <h2>No of Feedback</h2>
                    <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tenetur reiciendis illum</p>
                    <Link to="/" class="text-decoration-none text-dark">Read More</Link>
                  </div>
                </div>
                <div class="dash-card position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4" >
                  <div class="imgbox d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-comments text-white"></i>
                  </div>
                  <div class="content position-absolute px-4 w-100">
                    <h2>No of Feedback</h2>
                    <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tenetur reiciendis illum</p>
                    <Link to="/" class="text-decoration-none text-dark">Read More</Link>
                  </div>
                </div>
                <div class="dash-card position-relative shadow d-flex align-items-start justify-content-center bg-light rounded-4" >
                  <div class="imgbox d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-comments text-white"></i>
                  </div>
                  <div class="content position-absolute px-4 w-100">
                    <h2>No of Feedback</h2>
                    <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tenetur reiciendis illum</p>
                    <Link to="/" class="text-decoration-none text-dark">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeaDashboard