import React from 'react';
import Membersidebar from './Membersidebar/Membersidebar';
import { Outlet } from "react-router-dom"; 
// import './TeamMemberDashboard.css'


const TeamMemberDashboard = () => {
    return (
        <div className='superdiv'>
      {/* <h1>Super Admin Dashboard</h1>
      {error && <p>{error}</p>}
      <h2>Projects</h2> */}
      {/* <ul>
        {projects.map((project) => (
          <li key={project.project_id}>{project.project_name}</li>
        ))}
      </ul> */}
      {/* <Employees/> */}
        <Membersidebar/>
      <div className='outer-section'>
        <Outlet /> 
      </div>
    </div>
    );
};

export default TeamMemberDashboard;
