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
import CreateQuiz from './Login/Teacher/CreateQuiz'
import ManageQuiz from './Login/Teacher/ManageQuiz'
import Submission from './Login/Teacher/Submission'
import Analytics from './Login/Teacher/Analytics'
import QuestionBank from './Login/Teacher/QuestionBank'
import Notification from './Login/Teacher/Notification'
import Feedback from './Login/Teacher/Feedback'
import ProfileSetting from './Login/Teacher/ProfileSetting' 

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

          <Route path='/teadash/' element={<TeaDashboard/>}>
              <Route index element={<TeaHome/>}></Route>
              <Route path='createquiz' element={<CreateQuiz/>}></Route>
              <Route path='managequiz' element={<ManageQuiz/>}></Route>
              <Route path='submission' element={<Submission/>}></Route>
              <Route path='analytics' element={<Analytics/>}></Route>
              <Route path='questionbank' element={<QuestionBank/>}></Route>
              <Route path='notification' element={<Notification/>}></Route>
              <Route path='feedback' element={<Feedback/>}></Route>
              <Route path='profilesetting' element={<ProfileSetting/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
