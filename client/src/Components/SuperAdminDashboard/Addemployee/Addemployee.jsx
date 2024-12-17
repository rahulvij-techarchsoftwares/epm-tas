// import React, { useState } from 'react';
// import { PlusCircle, UserPlus, Mail, ChevronDown } from 'lucide-react';
// import './Addemployee.css';
// import axios from 'axios';

// const Addemployee = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [roles, setRoles] = useState([""]);

//   // Map role names to their corresponding IDs
//   const roleMap = {
//     "Super Admin": 1,
//     "Admin": 2,
//     "Operation Head": 3,
//     "HR": 4,
//     "Team Leader": 5,
//     "Team Member": 6
//   };

//   const handleAddRow = () => {
//     setRoles([...roles, ""]);
//   };

//   const handleRoleChange = (index, newRole) => {
//     const updatedRoles = [...roles];
//     updatedRoles[index] = newRole;
//     setRoles(updatedRoles);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Map role names to their IDs for each selected role
//     const roleIds = roles.map(role => roleMap[role] || null).filter(id => id !== null);

//     // Data to be sent to the backend
//     const employeeData = {
//       username: name,
//       email,
//       password,
//       role_id: roleIds[0] // Modify if multiple roles are needed
//     };

//     try {
//         const response = await axios.post("http://localhost:5000/api/auth/register", employeeData);

//       console.log(response.data);
//     } catch (error) {
//       console.error("Error adding employee:", error);
//     }
//   };

//   return (
//     <div className="addform-container">
//       <div className="addform-card">
//         <div className="addform-header">  
//           <UserPlus className="addheader-icon" />
//           <h1>Add Employee</h1>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="addform-group">
//             <label>Name</label>
//             <div className="addinput-wrapper">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 placeholder="Enter employee name"
//               />
//             </div>
//           </div>

//           <div className="addform-group">
//             <label>Email</label>
//             <div className="addinput-wrapper">
//               <Mail className="addinput-icon" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="employee@company.com"
//                 className="addwith-icon"
//               />
//             </div>
//           </div>

//           <div className="addform-group">
//             <label>Password</label>
//             <div className="addinput-wrapper">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="Enter password"
//               />
//             </div>
//           </div>

//           <div className="addform-group">
//             <label>Roles</label>
//             <div className="addroles-container">
//               {roles.map((role, index) => (
//                 <div key={index} className="addselect-wrapper">
//                   <select
//                     value={role}
//                     onChange={(e) => handleRoleChange(index, e.target.value)}
//                     required
//                   >
//                     <option value="">Select Role</option>
//                     {Object.keys(roleMap).map(roleName => (
//                       <option key={roleName} value={roleName}>
//                         {roleName}
//                       </option>
//                     ))}
//                   </select>
//                   <ChevronDown className="addselect-icon" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button type="submit" className="addsubmit-btn">
//             Add Employee
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addemployee;


import React, { useState, useEffect } from 'react';
import { PlusCircle, UserPlus, Mail, ChevronDown } from 'lucide-react';
import './Addemployee.css';
import axios from 'axios';
import { API_URL } from '../../../authapi/authapi';

const Addemployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([""]);
  const [departments, setDepartments] = useState([]); // State to store departments
  const [selectedDepartment, setSelectedDepartment] = useState(""); // State to store selected department

  // Map role names to their corresponding IDs
  const roleMap = {
    "Super Admin": 1,
    "Admin": 2,
    "Operation Head": 3,
    "HR": 4,
    "Team Leader": 5,
    "Team Member": 6
  };

  useEffect(() => {
    // Fetch departments from the backend
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/departments`); // Adjust URL as needed
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleAddRow = () => {
    setRoles([...roles, ""]);
  };

  const handleRoleChange = (index, newRole) => {
    const updatedRoles = [...roles];
    updatedRoles[index] = newRole;
    setRoles(updatedRoles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Map role names to their IDs for each selected role
    const roleIds = roles.map(role => roleMap[role] || null).filter(id => id !== null);

    // Data to be sent to the backend
    const employeeData = {
      username: name,
      email,
      password,
      role_id: roleIds[0], // Modify if multiple roles are needed
      department_id: selectedDepartment // Include department_id
    };

    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, employeeData);
      console.log(response.data);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="addform-container">
      <div className="addform-card">
        <div className="addform-header">
          <UserPlus className="addheader-icon" />
          <h1>Add Employee</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="addform-group">
            <label>Name</label>
            <div className="addinput-wrapper">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter employee name"
              />
            </div>
          </div>

          <div className="addform-group">
            <label>Email</label>
            <div className="addinput-wrapper">
              <Mail className="addinput-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="employee@company.com"
                className="addwith-icon"
              />
            </div>
          </div>

          <div className="addform-group">
            <label>Password</label>
            <div className="addinput-wrapper">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="addform-group">
            <label>Roles</label>
            <div className="addroles-container">
              {roles.map((role, index) => (
                <div key={index} className="addselect-wrapper">
                  <select
                    value={role}
                    onChange={(e) => handleRoleChange(index, e.target.value)}
                    required
                  >
                    <option value="">Select Role</option>
                    {Object.keys(roleMap).map(roleName => (
                      <option key={roleName} value={roleName}>
                        {roleName}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="addselect-icon" />
                </div>
              ))}
            </div>
          </div>

          <div className="addform-group">
            <label>Department</label>
            <div className="addselect-wrapper">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                required
              >
                <option value="">Select Department</option>
                {departments.map(department => (
                  <option key={department.department_id} value={department.department_id}>
                    {department.department_name}
                  </option>
                ))}
              </select>
              <ChevronDown className="addselect-icon" />
            </div>
          </div>

          <button type="submit" className="addsubmit-btn">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addemployee;

