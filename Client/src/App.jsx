import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import StuLogin from './Login/Student/StuLogin'
import TeaLogin from './Login/Teacher/TeaLogin'
import AdmLogin from './Login/Admin/AdmLogin'
import Flow from './pages/Flow'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flow' element={<Flow/>}/>
          <Route path='/student' element={<StuLogin />} />
          <Route path='/teacher' element={<TeaLogin />} />
          <Route path='/admin' element={<AdmLogin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
