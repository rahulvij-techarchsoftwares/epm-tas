import React from 'react';
import Tlsidebar from './Tlsidebar/Tlsidebar';
import { Outlet } from "react-router-dom"; 

const TeamLeaderDashboard = () => {
    return (
        // <div>
        //     <h1>Team Leader Dashboard</h1>
        //     <p>Welcome, Team Leader! You can assign projects and manage your team's performance.</p>
        //     {/* Add features and links specific to Team Leader */}
        // </div>
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
        <Tlsidebar/>
      <div className='outer-section'>
        <Outlet /> {/* This will display Biolink or Directory based on the current route */}
      </div>
    </div>
    );
};

export default TeamLeaderDashboard;
