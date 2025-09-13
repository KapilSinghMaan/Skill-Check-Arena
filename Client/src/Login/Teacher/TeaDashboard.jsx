import React, { useEffect } from 'react'
import logo from '../../assets/images/logo.png'

const TeaDashboard = () => {

  useEffect(()=>{
    let smallbig=document.getElementById('smallbig');
    let dashleft=document.querySelector('.dashboard-left');
    let dashright=document.querySelector('.dashboard-right');

    smallbig.onclick=function(){
      dashleft.classList.toggle('active');
      dashright.classList.toggle('active');
    }

  },[])

  return (
    <>
    <div className="container-fluid p-0">
      <div className="row m-0 d-flex">
        
        <div className="dashboard-left p-0">
          <div className="dashboard-logo py-3 d-flex align-items-center justify-content-center">
            <img src={logo} alt="" height={60}/>
          </div>
          <ul className='list-unstyled fs-3'>
            <li className='my-3 m-0 d-flex'><a href='Charbhag.com' className='d-flex w-100'><i className='my-3 fa-regular fa-house'></i> <span className='dash-text '>Home</span></a></li>
            <li className='my-3 d-flex'><i className='my-3 fas fa-clipboard-list'></i> <span className='dash-text '>Create Quiz</span></li>
            <li className='my-3 d-flex'><i className='my-3 fas fa-list-check'></i> <span className='dash-text '>Manage Quizzes</span></li>
            <li className='my-3 d-flex'><i className='my-3 fas fa-file-upload'></i> <span className='dash-text '>Submission</span></li>
            <li className='my-3 d-flex'><i className='my-3 fas fa-chart-line'></i> <span className='dash-text '>Analytics</span></li>
            <li className='my-3 d-flex'><i className='my-3 fa-regular fa-circle-question'></i> <span className='dash-text '>Question Bank</span></li>
            <li className='my-3 d-flex'><i className='my-3 fas fa-bell'></i> <span className='dash-text '>Notification</span></li>
            <li className='my-3 d-flex'><i className='my-3 fas fa-user-gear'></i> <span className='dash-text '>Profile Setting</span></li>
            <li className='my-3 d-flex'><i className='my-3 fas fa-comments'></i> <span className='dash-text '>Feedback</span></li>
          </ul>

              <div className="dash-logout btn fs-3 mt-5 d-flex align-items-center justify-content-center"><i class="fa-solid fa-right-from-bracket"></i> <span>LOGOUT</span></div>

        </div>
        <div className="dashboard-right active bg-info m-0">
          <i className='fas fa-bars fs-1 position-absolute m-3' id='smallbig'></i>
        </div>
      </div>
    </div>
    </>
  )
}

export default TeaDashboard