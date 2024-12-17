import React from 'react';

import { Outlet } from "react-router-dom"; 
import Adminsidebar from './Adminsidebar/Adminsidebar';
// import './TeamMemberDashboard.css'


const AdminDashboard = () => {
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
        <Adminsidebar/>
      <div className='outer-section'>
        <Outlet /> 
      </div>
    </div>
    );
};

export default AdminDashboard;
