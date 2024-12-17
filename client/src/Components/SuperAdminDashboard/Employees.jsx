// // Employees.jsx
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Employees.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpload, faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
// import Sidebar from "../Sidebar/Sidebar";

// export const Employees = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/super-admin/employees",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching employees:", error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <div className="projecttop">
//       {/* <Sidebar /> */}
//       <div className="projectsubtop">
//         <div className="projectcontainer">
//           <div className="projectheader">
//             <h1>Employees</h1>
//             <div className="projectactions">
//               <a href="#">
//                 <FontAwesomeIcon icon={faUpload} /> Import
//               </a>
//               <a href="#">
//                 <FontAwesomeIcon icon={faDownload} /> Export
//               </a>
//               <button
//                 onClick={() => navigate("/add-employee")}
//                 className="projectadd-customers"
//               >
//                 Add Employee
//               </button>
//             </div>
//           </div>
//           <div className="projectsearch-box">
//             <input type="text" placeholder="Search customer" />
//             <FontAwesomeIcon icon={faSearch} className="projectfa-search" />
//           </div>
//         </div>

//         <div className="projecttablecontainer">
//           <h2>User Information</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th>NAME</th>
//                 <th>EMAIL</th>
//                 <th>ROLE</th>
                
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user.user_id}>
//                   <td>{index + 1}</td>
//                   <td className="projecttableuser-info">
//                     <img
//                       src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.username}`}
//                       alt={`Profile of ${user.username}`}
//                       width="40"
//                       height="40"
//                     />
//                     {user.username}
//                   </td>
//                   <td>{user.email}</td>
//                   <td>{user.role_name}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Employees.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import { API_URL } from '../../authapi/authapi.js';

export const Employees = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
    
  function addIcons() {
    setVisible(!visible);
  }

 


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/super-admin/employees`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUsers(response.data);

      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    // <div className="projecttop">
    //   {/* <Sidebar /> */}
    //   <div className="projectsubtop">
    //     <div className="projectcontainer">
    //       <div className="projectheader">
    //         <h1>Employees</h1>
    //         <div className="projectactions">
    //           <a href="#">
    //             <FontAwesomeIcon icon={faUpload} /> Import
    //           </a>
    //           <a href="#">
    //             <FontAwesomeIcon icon={faDownload} /> Export
    //           </a>
    //           <button
    //             onClick={() => navigate("/add-employee")}
    //             className="projectadd-customers"
    //           >
    //             Add Employee
    //           </button>
    //         </div>
    //       </div>
    //       <div className="projectsearch-box">
    //         <input type="text" placeholder="Search employee" />
    //         <FontAwesomeIcon icon={faSearch} className="projectfa-search" />
    //       </div>
    //     </div>

    //     <div className="projecttablecontainer">
    //       <h2>User Information</h2>
    //       <table>
    //         <thead>
    //           <tr>
    //             <th>Sr No.</th>
    //             <th>NAME</th>
    //             <th>EMAIL</th>
    //             <th>ROLE</th>
    //             <th>DEPARTMENT</th> {/* Added Department column */}
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {users.map((user, index) => (
    //             <tr key={user.user_id}>
    //               <td>{index + 1}</td>
    //               <td className="projecttableuser-info">
    //                 <img
    //                   src={`https://api.multiavatar.com/${user.username}.svg`}
    //                   alt={`Profile of ${user.username}`}
    //                   width="40"
    //                   height="40"
    //                 />
    //                 {user.username}
    //               </td>
    //               <td>{user.email}</td>
    //               <td>{user.role_name}</td>
    //               <td>{user.department_name || "N/A"}</td> {/* Display department name */}
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-full bg-gray-100 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center overflow-auto  bg-white p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Employees</h1>
        <div className={` ${visible ? "hidden" : "inline space-x-0 "} md:space-x-2 md:flex items-center space-x-4`}>
          {/* Import and Export Buttons */}
          <button className="flex items-center space-x-2 px-4 py-2 mb-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 9.75L12 3 4.5 9.75m15 0V21h-15V9.75m15 0h-15"
              />
            </svg>
            <span>Import</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 mb-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 14.25l7.5 6.75 7.5-6.75m-15 0V3h15v11.25"
              />
            </svg>
            <span>Export</span>
          </button>
          {/* Add Employee Button */}
          <button onClick={() => navigate("/add-employee")} className="px-4 py-2 bg-purple-500 text-white mb-2 rounded shadow hover:bg-purple-600">
            Add Employee
          </button>

        </div>
        <button className="text-2xl inline md:hidden" onClick={addIcons}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
          </svg>
          </button>
      </div>

      {/* Search Section */}
      <div className="mt-6 flex items-center overflow-auto bg-white p-4 rounded shadow-md">
        
        <input
          type="text"
          placeholder="Search employees..."
          className="flex-grow p-2 border border-gray-300 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75L19.5 19.5m-7.875-3.75a6.375 6.375 0 100-12.75 6.375 6.375 0 000 12.75z"
          />
        </svg>
        </button>
      </div>

     
      <div className="mt-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Information</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 text-center">S.No.</th>
              <th className="py-3 px-6 text-center">Name</th>
              <th className="py-3 px-6 text-center">Email</th>
              <th className="py-3 px-6 text-center">Role</th>
              <th className="py-3 px-6 text-center">Department</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-center">{index + 1}</td>
                  <td className="py-3 px-6 text-center">{user.username}</td>
                  <td className="py-3 px-6 text-center">{user.email}</td>
                  <td className="py-3 px-6 text-center">{user.role_name}</td>
                  <td className="py-3 px-6 text-center">{user.department_name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="py-3 px-6 text-center text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

