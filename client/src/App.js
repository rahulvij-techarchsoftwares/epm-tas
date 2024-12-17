import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './Components/Login/Login';
import SuperAdminDashboard from './Components/SuperAdminDashboard/SuperAdminDashboard';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import OperationHeadDashboard from './Components/OperationHeadDashboard/OperationHeadDashboard';
import HRDashboard from './Components/HRDashboard/HRDashboard';
import TeamLeaderDashboard from './Components/TeamLeaderDashboard/TeamLeaderDashboard';
import TeamMemberDashboard from './Components/TeamMemberDashboard/TeamMemberDashboard';
import Addemployee from './Components/SuperAdminDashboard/Addemployee/Addemployee';
import { Employees } from './Components/SuperAdminDashboard/Employees';
import { Allprojects } from './Components/SuperAdminDashboard/Allprojects/Allprojects';
import Standup from './Components/TeamMemberDashboard/Standup/Standup';
import Standuphistory from './Components/TeamMemberDashboard/Standuphistory/Standuphistory';
import Teamstandup   from './Components/TeamLeaderDashboard/Teamstandup/Teamstandup';
import Leaveform from './Components/TeamMemberDashboard/Leaveform/Leaveform';
import Reviewstandup from './Components/TeamLeaderDashboard/Reviewstandup/Reviewstandup';
import Actionstandup from './Components/AdminDashboard/Actionstandup/Actionstandup';

// import Showprojects from './Components/SuperAdminDashboard/Showprojects/Showprojects';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      {/* Super Admin Dashboard with nested routes */}
      <Route path="/super-admin/dashboard" element={<SuperAdminDashboard />}>
        <Route path="employees" element={<Employees />} />
        <Route path="add-employee" element={<Addemployee />} />
        <Route path="projects" element={<Allprojects/>} />
      </Route>
      
      <Route path="/admin/dashboard" element={<AdminDashboard />}> 
        <Route path="action" element={<Actionstandup/>} />
        {/* <Route path="" element={<HRDashboard />} /> */}
      </Route>

      <Route path="/operation-head/dashboard" element={<OperationHeadDashboard />} />
      <Route path="/hr/dashboard" element={<HRDashboard />} />

      {/* <Route path="/team-leader/dashboard" element={<TeamLeaderDashboard />} /> */}
      <Route path="/team-leader/dashboard" element={<TeamLeaderDashboard/>}>
        <Route path="teamleader-stand-up" element={<Standup/>} />
        <Route path="team-review-standups" element={<Reviewstandup/>} />
        <Route path="team-standup-history" element={<Teamstandup/>} />
        <Route path="request-leave-form" element={<Leaveform/>} />
        {/* <Route path="add-employee" element={<Addemployee />} />
        <Route path="projects" element={<Allprojects/>} /> */}
      </Route>


      
      {/* <Route path="/team-member/dashboard" element={<TeamMemberDashboard />} /> */}
      <Route path="/team-member/dashboard" element={<TeamMemberDashboard/>}>
        <Route path="stand-up" element={<Standup/>} />
        <Route path="stand-up-history" element={<Standuphistory/>} />
        <Route path="request-leave-form" element={<Leaveform/>} />
      </Route>

      <Route path="/add-employee" element={<Addemployee/>} />
    </Routes>
  );
};

export default App;
