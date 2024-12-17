// import React from 'react';
// import './Sidebar.css';
// import { Link } from "react-router-dom";



// const Sidebar = () => {
//   return (
//     <div className="sidebarsidebar">
//       <div className="sidebarlogo">
//         <img
//           src="https://storage.googleapis.com/a1aa/image/Li79fYD0Zeq43054GLp4pqstx0hyHPc2EUMlgcU3PUBKTkuTA.jpg"
//           alt="Company Logo"
//           width="40"
//           height="40"
//         />
//         <span className="sidebarbadge">PRO</span>
//       </div>
//       <div className="sidebarcompany-info">
//         <div className="sidebarcompany-name">Acme Inc</div>
//         <div className="sidebartier">Your tier: Premium</div>
//       </div>
//       <ul className="sidebarmenu">
//         {/* <li>
//           <a href="#" className="sidebaractive">
//             <i className="fas fa-tachometer-alt icon"></i>
//             Dashboard
//           </a>
//         </li> */}
//         <li>
//             <Link to="/super-admin/dashboard/employees">Dashboard</Link>
//           </li>

//           <li>
//             <Link to="/super-admin/dashboard/projects">Projects</Link>
//           </li>
        
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;




import React, {useState} from 'react';
import { Link } from "react-router-dom";
// import './Sidebar.css';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  
  function addSidebar() {
      setSidebar(!sidebar);
      console.log("clicked");
    }
  return (
    // <div className="sidebarcontainer">
    //   {/* Fix the id for the checkbox */}
    //   <input type="checkbox" id="sidebarcheck" />
    //   {/* Match the htmlFor attribute with checkbox id */}
    //   <label htmlFor="sidebarcheck">
    //     <i className="fas fa-bars sidebaricon-button" id="sidebarbtn"></i>
    //     <i className="fas fa-times sidebaricon-button" id="sidebarcancel"></i>
    //   </label>


    //   <div className="sidebarsidebar">
    //     <header className="sidebarsidebar-header">Menu</header>
    //     <a href="#" className="sidebarsidebar-link sidebaractive">
    //       <i className="fas fa-qrcode"></i>
    //       <span>Dashboard</span>
    //     </a>

        
    //     <Link className="sidebarsidebar-link" to="/super-admin/dashboard/employees">
    //     <i className="fas fa-link"></i>
    //     <span>All Empoyees</span>
    //     </Link>
        
    //     <Link className="sidebarsidebar-link" to="/super-admin/dashboard/projects">
    //     <i className="fas fa-stream"></i>
    //     <span>All Projects</span>
    //     </Link>

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
                        <Link to="/super-admin/dashboard/employees">
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
                        <span className="ml-3">All Employees</span>
                        </button>
                        
                        </li>
                        </Link>
                        {/* Standup History Item */}
                        <Link to="/super-admin/dashboard/projects">
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
                        <span className="ml-3">All projects</span>
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
                        <Link to="/super-admin/dashboard/employees">
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
                        <span className="ml-3">All Employees</span>
                        </button>
                        </li>
                        </Link>
              
                        {/* Standup History Item */}
                        <Link to="/super-admin/dashboard/projects">
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
                        <span className="ml-3">All Projects</span>
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
  );
};

export default Sidebar;
