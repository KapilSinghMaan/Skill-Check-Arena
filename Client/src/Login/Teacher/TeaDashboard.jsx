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
        <i className='fas fa-bars fs-1 position-absolute top-0 start-0 m-3' id='smallbig'></i>
        <div className="dashboard-left p-0">
          <div className="dashboard-logo py-3 d-flex align-items-center justify-content-center">
            <img src={logo} alt="" height={65}/>
          </div>
          <ul className='list-unstyled ms-3 fs-3 mt-t'>
            <li><i className='fas fa-user'></i><span className='dash-text'>Home</span></li>
          </ul>
        </div>
        <div className="dashboard-right bg-info m-0"></div>
      </div>
    </div>
    </>
  )
}

export default TeaDashboard