import React, { useEffect, useState } from 'react';
import './Superadmindashboard.css';
import axios from 'axios';
import { Outlet } from "react-router-dom"; 
import { Employees } from './Employees';
import Sidebar from "../Sidebar/Sidebar";

const SuperAdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem('token');

    // If there's no token, redirect or show an error
    if (!token) {
      setError('Token not found');
      return;
    }

    // Make the API call with the token in the Authorization header
    axios
      .get('http://localhost:5000/api/projects', {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the header
        },
      })
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => {
        // Handle errors like unauthorized access (401) or other issues
        if (err.response && err.response.status === 403) {
          setError('You do not have permission to view projects.');
        } else {
          setError('An error occurred while fetching projects.');
        }
      });
  }, []);

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
      <Sidebar/>
      <div className='outer-section'>
        <Outlet /> {/* This will display Biolink or Directory based on the current route */}
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
