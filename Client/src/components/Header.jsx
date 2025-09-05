import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="row m-0">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary fs-4 rounded-5 mt-3">
                        <div class="container-fluid">
                            <Link class="navbar-brand ms-5" to="/"><img src={Logo} alt="Skill Check Pro Logo" height={60}/></Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                                    <li class="nav-item mx-3">
                                        <Link class="nav-link " aria-current="page" to="/"><i className='fa-regular fa-house'></i> Home</Link>
                                    </li>
                                    <li class="nav-item mx-3">
                                        <Link class="nav-link" to="/flow"><i className='fas fa-chart-diagram'></i> Flow</Link>
                                    </li>
                                    <li class="nav-item mx-3">
                                        <Link class="nav-link" to="/student"><i class="fas fa-user-graduate"></i> Student</Link>
                                    </li>
                                    <li class="nav-item mx-3">
                                        <Link class="nav-link" to="/teacher"><i class="fas fa-chalkboard-teacher"></i> Teacher</Link>
                                    </li>
                                    <li class="nav-item mx-3">
                                        <Link class="nav-link" to="/admin"><i class="fas fa-user-shield"></i> Admin</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header