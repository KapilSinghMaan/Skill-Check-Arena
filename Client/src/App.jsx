import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import StuLogin from './Login/Student/StuLogin'
import TeaLogin from './Login/Teacher/TeaLogin'
import AdmLogin from './Login/Admin/AdmLogin'
import Flow from './pages/Flow'
import StuReg from './Login/Student/StuReg'
import TeaReg from './Login/Teacher/TeaReg'
import TeaDashboard from './Login/Teacher/TeaDashboard'
import TeaHome from './Login/Teacher/TeaHome'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flow' element={<Flow/>}/>
          <Route path='/student' element={<StuLogin />} />
          <Route path='/stureg' element={<StuReg/>}/>
          <Route path='/teacher' element={<TeaLogin />} />
          <Route path='/teareg' element={<TeaReg/>}/>
          <Route path='/admin' element={<AdmLogin />} />

          <Route path='/teadash' element={<TeaDashboard/>}>
              {/* <Route index element={<TeaHome/>}/> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
