import React, {useState} from 'react';
import { Link } from "react-router-dom";
// import logo from '../tas-logo1.png';

function Adminsidebar() {
const [sidebar, setSidebar] = useState(false);

function addSidebar() {
    setSidebar(!sidebar);
    console.log("clicked");
  }

  return (
    <>
          {sidebar ? (
              <>
              <div className=" text-white bg-black bg-blend-darken  rounded font-semibold min-h-full fixed top-0 left-0 w-48">
                  <div className="p-4">
                  {/* <img src={logo} alt="logo" /> */}
                  </div>
                  <ul>
                  {/* Dashboard Item */}
                  <li>
                  <button
                  className="flex items-center w-full p-4 text-left hover:bg-gray-600"
                //   onClick={handleDashboardClick}
                  >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                  </button>
                  </li>
        
                  {/* Standups Item */}
                  <Link to="/admin/dashboard/action">
                  <li>
                  
                  <button
                  className="flex items-center w-full p-4 text-left hover:bg-gray-600"
                //   onClick={handleStandupClick}
                  >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4h18M3 10h18M3 16h18"
                    />
                  </svg>
                  <span className="ml-3">Review Standups</span>
                  </button>
                  
                  </li>
                  </Link>
                  {/* Standup History Item */}
                  <Link to="/admin/dashboard/action">
                  <li>
                  <button
                  className="flex items-center w-full p-4 text-left hover:bg-gray-600"
                //   onClick={handleStandupHistoryClick}
                  >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10l4 4m0 0l4-4m-4 4V3"
                    />
                  </svg>
                  <span className="ml-3">Stand Up History</span>
                  </button>
                  </li>
                  </Link>
                  </ul>
                  </div>
        
                  
              </>
            ) : (
              <>
              </>
            )}
        
        
        <div className="bg-gray-900 text-white hidden xl:inline font-semibold h-screen fixed top-0 left-0 w-64 sm:h-full">
                  <div className="p-4">
                  {/* <img src={logo} alt="logo" /> */}
                  </div>
                  <ul>
                  {/* Dashboard Item */}
                  <li>
                  <button
                  className="flex items-center w-full p-4 text-left hover:bg-gray-400"
                //   onClick={handleDashboardClick}
                  >
                  <svg
                    className="w-6 h-6 text-gray-200 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                  </button>
                  </li>
        
                  {/* Standups Item */}
                  <Link to="/admin/dashboard/action">
                  <li>
                  <button
                  className="flex items-center w-full p-4 text-left hover:bg-gray-400"
                //   onClick={handleStandupClick}
                  >
                  <svg
                    className="w-6 h-6 text-gray-200 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4h18M3 10h18M3 16h18"
                    />
                  </svg>
                  <span className="ml-3">Review Standups</span>
                  </button>
                  </li>
                  </Link>
        
                  {/* Standup History Item */}
                  <Link to="/admin/dashboard">
                  <li>
                  <button
                  className="flex items-center w-full p-4 text-left hover:bg-gray-400"
                //   onClick={handleStandupHistoryClick}
                  >
                  <svg
                    className="w-6 h-6 text-gray-200 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10l4 4m0 0l4-4m-4 4V3"
                    />
                  </svg>
                  <span className="ml-3">Stand Up History</span>
                  </button>
                  </li>
                  </Link>
                  </ul>
                  </div>
        
        
          
        
        {/* Mobile Toggle Button */}
        <button
          className="xl:hidden fixed top-4 left-4 text-black "
          onClick={addSidebar}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        
        
    </>
  )
}

export default Adminsidebar;