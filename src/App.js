import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import JobApproval from './pages/JobApproval.jsx';
import InterviewFeedback from './pages/InterviewFeedback.jsx';
import HiringDecision from './pages/HiringDecision.jsx';
import Reporting from './pages/Reporting.jsx';
import Message from './pages/Message.jsx';



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/job_approval' element={<JobApproval/>} />
         <Route path='/interview_feedback' element={<InterviewFeedback/>} />
         <Route path='/hiring_decision' element={<HiringDecision/>}/>
         <Route path='/reporting' element={<Reporting/>}/>
         <Route path='/message' element={<Message/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;