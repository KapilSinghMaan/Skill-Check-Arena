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
import StuDashboard from './Login/Student/StuDashboard'
import StuHome from './Login/Student/StuHome'
import AvailableQuiz from './Login/Student/AvailableQuiz'
import MyAttempts from './Login/Student/MyAttempts'
import StuProfileSetting from './Login/Student/StuProfileSetting'
import QuizInProcess from './Login/Student/QuizInProcess'
import Results from './Login/Student/Results'
import StuDiscussion from './Login/Student/StuDiscussion'
import AdmDashboard from './Login/Admin/AdmDashboard'
import AdmHome from './Login/Admin/AdmHome'
import Reports from './Login/Admin/Reports'
import SubmissionLogs from './Login/Admin/SubmissionLogs'
import SystemSetting from './Login/Admin/SystemSetting'
import UserManagement from './Login/Admin/UserManagement'
import QuizOverSight from './Login/Admin/QuizOverSight'
import DashboardOverview from './Login/Admin/DashboardOverview'
import Subject from './Login/Admin/Subject'

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

          <Route path='/studash/' element={<StuDashboard/>}>
              <Route index element={<StuHome/>}></Route>
              <Route path='availablequiz' element={<AvailableQuiz/>}></Route>
              <Route path='myattempts' element={<MyAttempts/>}></Route>
              <Route path='quizinprocess' element={<QuizInProcess/>}></Route>
              <Route path='results' element={<Results/>}></Route>
              <Route path='studiscussion' element={<StuDiscussion/>}></Route>
              <Route path='stuprofilesetting' element={<StuProfileSetting/>}></Route>
          </Route>

          <Route path='/admindash/' element={<AdmDashboard/>}>
              <Route index element={<AdmHome/>}></Route>
              <Route path='reports' element={<Reports/>}></Route>
              <Route path='submissionlogs' element={<SubmissionLogs/>}></Route>
              <Route path='systemsetting' element={<SystemSetting/>}></Route>
              <Route path='usermanagement' element={<UserManagement/>}></Route>
              <Route path='quizoversight' element={<QuizOverSight/>}></Route>
              <Route path='dashboardoverview' element={<DashboardOverview/>}></Route>
              <Route path='subject' element={<Subject/>}></Route>
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
