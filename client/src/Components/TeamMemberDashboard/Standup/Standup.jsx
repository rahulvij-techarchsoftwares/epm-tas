// // import React, { useState } from 'react';
// // import { Clock, Save } from 'lucide-react';
// // import './Standup.css';

// // // interface TimeEntry {
// // //   projectName: string;
// // //   status: 'online' | 'offline';
// // //   hours: number;
// // //   minutes: number;
// // //   billingStatus: 'billable' | 'non-billable';
// // //   profileName: string;
// // //   notes: string;
// // // }

// // const MOCK_PROJECTS = [
// //   { id: '1', name: 'Web App Redesign' },
// //   { id: '2', name: 'Mobile App Development' },
// //   { id: '3', name: 'API Integration' },
// // ];

// // const MOCK_PROFILES = [
// //   { id: '1', name: 'Developer' },
// //   { id: '2', name: 'Designer' },
// //   { id: '3', name: 'Project Manager' },
// // ];

// // function Standup() {
// // //   const [entry, setEntry] = useState<TimeEntry>({
// // //     projectName: '',
// // //     status: 'online',
// // //     hours: 0,
// // //     minutes: 0,
// // //     billingStatus: 'billable',
// // //     profileName: '',
// // //     notes: '',
// // //   });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Submitted entry:');
// //   };

// // //   const updateField = (field, value) => {
// // //     setEntry((prev) => ({ ...prev, [field]: value }));
// // //   };

// //   return (
// //     <div className="container">
// //       <div className="card">
// //         <div className="header">
// //           <Clock className="icon" />
// //           <h1 className="title">Time Entry</h1>
// //         </div>

// //         <form onSubmit={handleSubmit} className="form">
// //           <div className="grid">
// //             <div className="form-group">
// //               <label className="label">Project Name</label>
// //               <select
// //                 className="input"
// //                 // value={entry.projectName}
// //                 // onChange={(e) => updateField('projectName', e.target.value)}
// //               >
// //                 <option value="">Select Project</option>
// //                 {MOCK_PROJECTS.map((project) => (
// //                   <option key={project.id} value={project.name}>
// //                     {project.name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             <div className="form-group">
// //               <label className="label">Status</label>
// //               <select
// //                 className="input"
// //                 // value={entry.status}
// //                 // onChange={(e) => updateField('status', e.target.value)}
// //               >
// //                 <option value="online">Online</option>
// //                 <option value="offline">Offline</option>
// //               </select>
// //             </div>

// //             <div className="form-group">
// //               <label className="label">Hours</label>
// //               <input
// //                 type="number"
// //                 min="0"
// //                 className="input"
// //                 // value={entry.hours}
// //                 // onChange={(e) => updateField('hours', parseInt(e.target.value) || 0)}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label className="label">Minutes</label>
// //               <input
// //                 type="number"
// //                 min="0"
// //                 max="59"
// //                 className="input"
// //                 // value={entry.minutes}
// //                 // onChange={(e) => updateField('minutes', parseInt(e.target.value) || 0)}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label className="label">Billing Status</label>
// //               <select
// //                 className="input"
// //                 // value={entry.billingStatus}
// //                 // onChange={(e) => updateField('billingStatus', e.target.value)}
// //               >
// //                 <option value="billable">Billable</option>
// //                 <option value="non-billable">Non-billable</option>
// //               </select>
// //             </div>

// //             <div className="form-group">
// //               <label className="label">Profile Name</label>
// //               <select
// //                 className="input"
// //                 // value={entry.profileName}
// //                 // onChange={(e) => updateField('profileName', e.target.value)}
// //               >
// //                 <option value="">Select Profile</option>
// //                 {MOCK_PROFILES.map((profile) => (
// //                   <option key={profile.id} value={profile.name}>
// //                     {profile.name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <label className="label">Notes</label>
// //             <textarea
// //               rows={3}
// //               className="input textarea"
// //             //   value={entry.notes}
// //             //   onChange={(e) => updateField('notes', e.target.value)}
// //               placeholder="Add any additional notes..."
// //             />
// //           </div>

// //           <div className="button-group">
// //             <button type="submit" className="submit-button">
// //               <Save className="button-icon" />
// //               Save Entry
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Standup;





// // import React, { useState, useEffect } from 'react';
// // import { Clock } from 'lucide-react';
// // import './Standup.css';

// // function Standup() {
// //   const [users, setUsers] = useState([]); // To store users
// //   const [projects, setProjects] = useState([]); // To store projects
// //   const [formData, setFormData] = useState({
// //     projectName: '',
// //     status: 'online',
// //     hours: 0,
// //     minutes: 0,
// //     billingStatus: 'billable',
// //     profileName: '',
// //     notes: '',
// //   });
// //   const token = localStorage.getItem('token'); 

//   // Fetch users and projects from the API when the component mounts
//   // useEffect(() => {
//   //   // Fetch users from API
//   //   fetch('http://localhost:5000/api/standup-users')
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       console.log("Users data:", data); // Check the API response
//   //       setUsers(data); // Set users as array
//   //     })
//   //     .catch((error) => console.error('Error fetching users:', error));
  
//   //   // Fetch projects from API
//   //   fetch('http://localhost:5000/api/standup-projects')
//   //     .then((response) => response.json())
//   //     .then((data) => setProjects(data)) // Set projects as array
//   //     .catch((error) => console.error('Error fetching projects:', error));
//   // }, []);

// //   useEffect(() => {
// //     // Function to fetch users
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/standup-users', {
// //           headers: {
// //             'Authorization': `Bearer ${token}`, // Add the token to headers
// //             'Content-Type': 'application/json'
// //           }
// //         });

// //         if (!response.ok) {
// //           throw new Error(`Error fetching users: ${response.statusText}`);
// //         }

// //         const data = await response.json();
// //         console.log("Users data:", data); // Check the API response
// //         setUsers(data); // Set users as array
// //       } catch (error) {
// //         console.error('Error fetching users:', error);
// //       }
// //     };

// //     // Function to fetch projects
// //     const fetchProjects = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/standup-projects', {
// //           headers: {
// //             'Authorization': `Bearer ${token}`, // Add the token to headers
// //             'Content-Type': 'application/json'
// //           }
// //         });

// //         if (!response.ok) {
// //           throw new Error(`Error fetching projects: ${response.statusText}`);
// //         }

// //         const data = await response.json();
// //         setProjects(data); // Set projects as array
// //       } catch (error) {
// //         console.error('Error fetching projects:', error);
// //       }
// //     };

// //     // Call both functions
// //     fetchUsers();
// //     fetchProjects();
// //   }, [token]);

// //   // Handle field updates
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({         
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   return (
// //     <div className="container">
// //       <div className="card">
// //         <div className="header">
// //           <Clock className="icon" />
// //           <h1 className="title">Time Entry</h1>
// //         </div>

// //         <form className="form">
// //           <div className="grid">
// //             {/* Project Name Dropdown */}
// //             <div className="form-group">
// //               <label className="label">Project Name</label>
// //               <select
// //                 name="projectName"
// //                 className="input"
// //                 value={formData.projectName}
// //                 onChange={handleChange}
// //               >
// //                 <option value="">Select Project</option>
// //                 {projects.map((project) => (
// //                   <option key={project.project_id} value={project.project_name}>
// //                     {project.project_name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             {/* Status Dropdown */}
// //             <div className="form-group">
// //               <label className="label">Status</label>
// //               <select
// //                 name="status"
// //                 className="input"
// //                 value={formData.status}
// //                 onChange={handleChange}
// //               >
// //                 <option value="online">Online</option>
// //                 <option value="offline">Offline</option>
// //               </select>
// //             </div>

// //             {/* Hours Input */}
// //             <div className="form-group">
// //               <label className="label">Hours</label>
// //               <input
// //                 type="number"
// //                 min="0"
// //                 className="input"
// //                 name="hours"
// //                 value={formData.hours}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             {/* Minutes Input */}
// //             <div className="form-group">
// //               <label className="label">Minutes</label>
// //               <input
// //                 type="number"
// //                 min="0"
// //                 max="59"
// //                 className="input"
// //                 name="minutes"
// //                 value={formData.minutes}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             {/* Billing Status Dropdown */}
// //             <div className="form-group">
// //               <label className="label">Billing Status</label>
// //               <select
// //                 name="billingStatus"
// //                 className="input"
// //                 value={formData.billingStatus}
// //                 onChange={handleChange}
// //               >
// //                 <option value="billable">Billable</option>
// //                 <option value="non-billable">Non-billable</option>
// //               </select>
// //             </div>

// //             {/* Profile Name Dropdown */}
// //             <div className="form-group">
// //               <label className="label">Profile Name</label>
// //               <select
// //                 name="profileName"
// //                 className="input"
// //                 value={formData.profileName}
// //                 onChange={handleChange}
// //               >
// //                 <option value="">Select Profile</option>
// //                 {users.map((user) => (
// //                   <option key={user.user_id} value={user.username}>
// //                     {user.username}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           </div>

// //           {/* Notes Textarea */}
// //           <div className="form-group">
// //             <label className="label">Notes</label>
// //             <textarea
// //               rows={3}
// //               className="input textarea"
// //               name="notes"
// //               value={formData.notes}
// //               onChange={handleChange}
// //               placeholder="Add any additional notes..."
// //             />
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Standup;




// // import React, { useState, useEffect } from 'react';
// // import { Clock, Save } from 'lucide-react';
// // import './Standup.css';

// // function Standup() {
// //   const [users, setUsers] = useState([]); // To store users
// //   const [projects, setProjects] = useState([]); // To store projects
// //   const [formData, setFormData] = useState({
// //     projectName: '',
// //     status: 'online',
// //     hours: 0,
// //     minutes: 0,
// //     billingStatus: 'billable',
// //     profileName: '',
// //     notes: '',
// //   });
// //   const token = localStorage.getItem('token'); 

// //   useEffect(() => {
// //     // Function to fetch users
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/standup-users', {
// //           headers: {
// //             'Authorization': `Bearer ${token}`, // Add the token to headers
// //             'Content-Type': 'application/json'
// //           }
// //         });

// //         if (!response.ok) {
// //           throw new Error(`Error fetching users: ${response.statusText}`);
// //         }

// //         const data = await response.json();
// //         console.log("Users data:", data); // Check the API response

// //         // If the data is an object, make sure to wrap it in an array
// //         setUsers(Array.isArray(data) ? data : [data]); // Ensure it's an array
// //       } catch (error) {
// //         console.error('Error fetching users:', error);
// //       }
// //     };

// //     // Function to fetch projects
// //     const fetchProjects = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/standup-projects', {
// //           headers: {
// //             'Authorization': `Bearer ${token}`, // Add the token to headers
// //             'Content-Type': 'application/json'
// //           }
// //         });

// //         if (!response.ok) {
// //           throw new Error(`Error fetching projects: ${response.statusText}`);
// //         }

// //         const data = await response.json();
// //         setProjects(data); // Set projects as array
// //       } catch (error) {
// //         console.error('Error fetching projects:', error);
// //       }
// //     };

// //     // Call both functions
// //     fetchUsers();
// //     fetchProjects();
// //   }, [token]);

// //   // Handle field updates
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({         
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   return (
// //     <div className="container">
// //       <div className="card">
// //         <div className="header">
// //           <Clock className="icon" />
// //           <h1 className="title">Time Entry</h1>
// //         </div>

// //         <form className="form">
// //           <div className="grid">
// //             {/* Project Name Dropdown */}
// //             <div className="form-group">
// //               <label className="label">Project Name</label>
// //               <select
// //                 name="projectName"
// //                 className="input"
// //                 value={formData.projectName}
// //                 onChange={handleChange}
// //               >
// //                 <option value="">Select Project</option>
// //                 {projects.map((project) => (
// //                   <option key={project.project_id} value={project.project_name}>
// //                     {project.project_name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             {/* Status Dropdown */}
// //             <div className="form-group">
// //               <label className="label">Status</label>
// //               <select
// //                 name="status"
// //                 className="input"
// //                 value={formData.status}
// //                 onChange={handleChange}
// //               >
// //                 <option value="online">Online</option>
// //                 <option value="offline">Offline</option>
// //               </select>
// //             </div>

// //             {/* Hours Input */}
// //             <div className="form-group">
// //               <label className="label">Hours</label>
// //               <input
// //                 type="number"
// //                 min="0"
// //                 className="input"
// //                 name="hours"
// //                 value={formData.hours}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             {/* Minutes Input */}
// //             <div className="form-group">
// //               <label className="label">Minutes</label>
// //               <input
// //                 type="number"
// //                 min="0"
// //                 max="59"
// //                 className="input"
// //                 name="minutes"
// //                 value={formData.minutes}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             {/* Billing Status Dropdown */}
// //             <div className="form-group">
// //               <label className="label">Billing Status</label>
// //               <select
// //                 name="billingStatus"
// //                 className="input"
// //                 value={formData.billingStatus}
// //                 onChange={handleChange}
// //               >
// //                 <option value="billable">Billable</option>
// //                 <option value="non-billable">Non-billable</option>
// //               </select>
// //             </div>

// //             {/* Profile Name Dropdown */}
// //             <div className="form-group">
// //               <label className="label">Profile Name</label>
// //               <select
// //                 name="profileName"
// //                 className="input"
// //                 value={formData.profileName}
// //                 onChange={handleChange}
// //               >
// //                 <option value="">Select Profile</option>
// //                 {users.map((user) => (
// //                   <option key={user.user_id} value={user.username}>
// //                     {user.username}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           </div>

// //           {/* Notes Textarea */}
// //           <div className="form-group">
// //             <label className="label">Notes</label>
// //             <textarea
// //               rows={3}
// //               className="input textarea"
// //               name="notes"
// //               value={formData.notes}
// //               onChange={handleChange}
// //               placeholder="Add any additional notes..."
// //             />
// //           </div>

// //           <div className="button-group">
// //              <button type="submit" className="submit-button">
// //                <Save className="button-icon" />
// //                Save Entry
// //             </button>
// //            </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Standup;


// import React, { useState, useEffect } from 'react';
// import { Clock, Save } from 'lucide-react';
// import './Standup.css';

// function Standup() {
//   const [users, setUsers] = useState([]); // To store users
//   const [projects, setProjects] = useState([]); // To store projects
//   const [formData, setFormData] = useState({
//     projectName: '',
//     status: 'online',
//     hours: 0,
//     minutes: 0,
//     billingStatus: 'billable',
//     profileName: '',
//     notes: '',
//   });
//   const token = localStorage.getItem('token'); 

//   useEffect(() => {
//     // Function to fetch users
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/standup-users', {
//           headers: {
//             'Authorization': `Bearer ${token}`, // Add the token to headers
//             'Content-Type': 'application/json'
//           }
//         });

//         if (!response.ok) {
//           throw new Error(`Error fetching users: ${response.statusText}`);
//         }

//         const data = await response.json();
//         console.log("Users data:", data); // Check the API response

//         setUsers(Array.isArray(data) ? data : [data]); // Ensure it's an array
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     // Function to fetch projects
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/standup-projects', {
//           headers: {
//             'Authorization': `Bearer ${token}`, // Add the token to headers
//             'Content-Type': 'application/json'
//           }
//         });

//         if (!response.ok) {
//           throw new Error(`Error fetching projects: ${response.statusText}`);
//         }

//         const data = await response.json();
//         setProjects(data); // Set projects as array
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     fetchUsers();
//     fetchProjects();
//   }, [token]);

//   // Handle field updates
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({         
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submit behavior

//     // Prepare the data to send to the API
//     const data = {
//       user_id: users.find((user) => user.username === formData.profileName)?.user_id,
//       project_id: projects.find((project) => project.project_name === formData.projectName)?.project_id,
//       status: formData.status,
//       hours: formData.hours,
//       minutes: formData.minutes,
//       billing_status: formData.billingStatus,
//       notes: formData.notes,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/standups', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`Error saving standup: ${response.statusText}`);
//       }

//       const result = await response.json();
//       console.log('Standup entry saved:', result);
//       alert('Standup entry saved successfully!');
//     } catch (error) {
//       console.error('Error submitting standup entry:', error);
//       alert('Failed to save the standup entry.');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <div className="header">
//           <Clock className="icon" />
//           <h1 className="title">Time Entry</h1>
//         </div>

//         <form className="form" onSubmit={handleSubmit}>
//           <div className="grid">
//             {/* Project Name Dropdown */}
//             <div className="form-group">
//               <label className="label">Project Name</label>
//               <select
//                 name="projectName"
//                 className="input"
//                 value={formData.projectName}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Project</option>
//                 {projects.map((project) => (
//                   <option key={project.project_id} value={project.project_name}>
//                     {project.project_name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Status Dropdown */}
//             <div className="form-group">
//               <label className="label">Status</label>
//               <select
//                 name="status"
//                 className="input"
//                 value={formData.status}
//                 onChange={handleChange}
//               >
//                 <option value="online">Online</option>
//                 <option value="offline">Offline</option>
//               </select>
//             </div>

//             {/* Hours Input */}
//             <div className="form-group">
//               <label className="label">Hours</label>
//               <input
//                 type="number"
//                 min="0"
//                 className="input"
//                 name="hours"
//                 value={formData.hours}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Minutes Input */}
//             <div className="form-group">
//               <label className="label">Minutes</label>
//               <input
//                 type="number"
//                 min="0"
//                 max="59"
//                 className="input"
//                 name="minutes"
//                 value={formData.minutes}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Billing Status Dropdown */}
//             <div className="form-group">
//               <label className="label">Billing Status</label>
//               <select
//                 name="billingStatus"
//                 className="input"
//                 value={formData.billingStatus}
//                 onChange={handleChange}
//               >
//                 <option value="billable">Billable</option>
//                 <option value="non-billable">Non-billable</option>
//               </select>
//             </div>

//             {/* Profile Name Dropdown */}
//             <div className="form-group">
//               <label className="label">Profile Name</label>
//               <select
//                 name="profileName"
//                 className="input"
//                 value={formData.profileName}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Profile</option>
//                 {users.map((user) => (
//                   <option key={user.user_id} value={user.username}>
//                     {user.username}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Notes Textarea */}
//           <div className="form-group">
//             <label className="label">Notes</label>
//             <textarea
//               rows={3}
//               className="input textarea"
//               name="notes"
//               value={formData.notes}
//               onChange={handleChange}
//               placeholder="Add any additional notes..."
//             />
//           </div>

//           <div className="button-group">
//             <button type="submit" className="submit-button">
//               <Save className="button-icon" />
//               Save Entry
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Standup;




import React, { useState, useEffect } from 'react';
import { API_URL } from '../../../authapi/authapi';
const DashBoard = () => {
  const [view, setView] = useState('dashboard');
  const [rows, setRows] = useState([]);
  const [projects, setProjects] = useState([]);
  const [standups, setStandups] = useState([]);
  const [users, setUsers] = useState([]);
  const [profileName, setProfileName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [hoursSpent, setHoursSpent] = useState(0);
  const [minutesSpent, setMinutesSpent] = useState(0);
  const [status, setStatus] = useState('');
  const [action, setAction] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
   // Define state for form data
   const [formData, setFormData] = useState({
    date: '',
    profileName: '',
    projectName: '',
    hoursSpent: '',
    minutesSpent: '',
    billingStatus: '',
    status: '',
    action: '',
    notes: '',
    projectId: '', // Add projectId here
  });
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Retrieve token from localStorage
    const token = localStorage.getItem('token');
    console.log(token);

    // If no token is found, exit early
    if (!token) {
      console.error('No token found');
      return;
    }

    // Fetch projects
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_URL}/api/standup-projects`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    // Fetch user profile
    const fetchProfileName = async () => {
      try {
        const response = await fetch(`${API_URL}/api/standup-users`, {
          headers: {
            Authorization: `Bearer ${token}`, // Use the token from localStorage
          },
        });

        if (response.status === 403) {
          console.error('403 Forbidden: Invalid or missing token');
          return;
        }

        const data = await response.json();
        setProfileName(data.username); // Set the username
        console.log(data.username);
      } catch (error) {
        console.error('Error fetching profile name:', error);
      }
    };
    const fetchStandups = async () => {
      try {
        const response = await fetch(`${API_URL}}/api/user-latest-standups`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Assuming the token is stored in localStorage
          },
        });

        if (response.ok) {
          const data = await response.json();
          setStandups(data);
        } else {
          console.error("Error fetching standups");
        }
      } catch (error) {
        console.error("Error fetching standups:", error);
      }
    };

    // Call the functions to fetch data
    fetchProjects();
    fetchProfileName();
    fetchStandups();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

     // Validate required fields
  if (!formData.status || !['Online', 'Offline'].includes(formData.status)) {
    alert('Please select a valid status: Online or Offline');
    return;
  }

  if (!formData.projectId) {
    alert('Please select a project.');
    return;
  }

    const standupData = {
      project_id: formData.projectId,
      status: formData.status,
      hours: formData.hoursSpent,
      minutes: formData.minutesSpent,
      billing_status: formData.billingStatus,
      notes: formData.notes,
      standup_date: formData.date,
    };

    try {
      const response = await fetch(`${API_URL}/api/standups`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(standupData),
      });

      const result = await response.json();

      if (response.status === 201) {
        console.log('Standup entry saved successfully:', result);
        // Handle success (e.g., show a success message or reset the form)
      } else {
        console.error('Error saving standup entry:', result.error);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error submitting standup entry:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Formats date to dd/mm/yyyy
  };
  

// function handleStandupClick() {
//   setView(view === 'standup' ? '' : 'standup'); // Toggle between standup and dashboard
//   // setSidebar(!sidebar);
// }

// function handleStandupHistoryClick() {
//   setView(view === 'history' ? '' : 'history'); // Toggle between history and dashboard
//   // setSidebar(!sidebar);
// }

// function handleDashboardClick() {
//   setView('dashboard'); // Show the dashboard view
//   // setSidebar(!sidebar);
// }

function addRow() {
  // Add a new row to the rows array
  const newRow = {
    projectName: '',
    offlineOnline: '',
    hours: '',
    notes: '',
    date: '',
  };
  setRows([...rows, newRow]); // Add new row to the state
}

const removeRow = (index) => {
  setRows(rows.filter((_, i) => i !== index));
};

function timeSheet() {
  setView(view === 'timesheet' ? '' : 'timesheet'); 
}

  return (
    <>
      {view === "dashboard" && (
        <>
          <div className="flex min-w-full flex-col items-center justify-center p-4 space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md h-60">
              <div className="flex justify-center">
                <button
                  className="text-white bg-blue-500 font-bold hover:bg-blue-600 p-2 w-32 rounded-lg text-3xl"
                  onClick={timeSheet}
                >
                  +
                </button>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-gray-800 ">
                  Add Timesheet
                </h3>
              </div>

              <div className="mt-8 flex justify-center space-x-8">
                {/* Weekly Option */}
                <p className="flex items-center justify-center bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700 rounded-lg px-4 py-2 cursor-pointer transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="mr-2"
                    fill="currentColor"
                  >
                    <path d="M6 2h12c1.104 0 2 .896 2 2v16c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2V4c0-1.104.896-2 2-2zm12 2H6v16h12V4z" />
                  </svg>
                  Weekly
                </p>

                {/* Daily Option */}
                <p className="flex items-center justify-center bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700 rounded-lg px-4 py-2 cursor-pointer transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="mr-2"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                  Daily
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Display views based on the current state */}
      {view === "standup" && (
        <>
          <div className="lg:ml-32">
            <div className="m-4">
              <h2 className="text-2xl font-bold">Welcome to StandUp</h2>
            </div>

            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <table className="min-w-full text-gray-500">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" className="px-4 py-3 w-1/4 sm:w-[150px]">
                      Project Name
                    </th>
                    <th scope="col" className="px-4 py-3 w-1/4 sm:w-[150px]">
                      Offline/Online
                    </th>
                    <th scope="col" className="px-4 py-3 w-1/4 sm:w-[150px]">
                      No. of Hours
                    </th>
                    <th scope="col" className="px-4 py-3 w-1/4 sm:w-[150px]">
                      Notes
                    </th>
                    <th scope="col" className="px-4 py-3 w-1/4 sm:w-[150px]">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-3 w-1/4 sm:w-[150px]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="px-4 py-3">
                      <select className="min-w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select Project</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="Offline">Offline</option>
                        <option value="Online">Online</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Notes"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </td>
                    <td className="px-4 py-3 flex justify-center items-center">
                      <button
                        className="min-w-[40px] m-2 text-white bg-green-500 text-xl font-bold p-2 rounded-lg hover:bg-green-800"
                        onClick={addRow}
                      >
                        +
                      </button>
                    </td>
                  </tr>

                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3">
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="">Select Project</option>
                          <option value="">Project A</option>
                          <option value="">Project B</option>
                          <option value="">Project C</option>
                          <option value="">Project D</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="offline">Offline</option>
                          <option value="online">Online</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="0"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <textarea
                          className="min-w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Notes"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="date"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </td>
                      <td className="px-4 py-3 flex justify-center items-center">
                        <button
                          className="min-w-[40px] m-2 text-white bg-red-500 text-xl font-bold p-2 rounded-lg hover:bg-red-800"
                          onClick={() => removeRow(index)}
                        >
                          -
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="m-4 text-center">
                <button className="bg-yellow-500 h-12 w-full sm:w-32 hover:bg-yellow-600 text-white text-center text-xl font-bold rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {view === "history" && (
        <>
          <div className="min-w-full">
            <div className="m-4">
              <h2 className="text-2xl font-bold">StandUp History</h2>
            </div>

            <div className="overflow-x-auto shadow-md ml-4 sm:ml-28 sm:rounded-lg">
              <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Project Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Offline/Online
                    </th>
                    <th scope="col" className="px-6 py-3">
                      No. of Hours
                    </th>
                    <th scope="col" className="px-6 py-3">
                      No. of Min.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Notes
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      ABC
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      Online
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      4
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      30
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      Done
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      11/12/2024
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                          Approved
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      XYZ
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      Online
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      2
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      00
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      xyz
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      12/12/2024
                    </td>
                    <td
                      scope="col"
                      className="px-6 py-3 text-lg font-medium text-center"
                    >
                      <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                          Approved
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {view === "timesheet" && (
        <>
          <div>
            <div className=" min-h-screen space-x-2 min-w-full overflow-hidden">
              <div className="flex flex-col lg:flex-row p-2 ml-0 lg:ml-28">
                {/* Timesheet Form */}
                <div className="p-3 ml-0 border-t min-w-full sm:min-w-[600px] rounded-lg shadow-xl mb-5 lg:mb-0">
                  <h2 className="text-xl font-bold text-center text-black border-b-2 p-2 mb-3">
                    Daily Timesheet
                  </h2>
                <form className="space-y-2" onSubmit={handleSubmit}>
                {/* Date and Profile Name in a single row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="date" className="font-medium text-gray-700 text-xs">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formatDate(formData.date)}
                      onChange={handleChange}
                      className="min-w-full h-9 p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label htmlFor="profileName" className="font-medium text-gray-700 text-xs">
                      Profile name
                    </label>
                    <select
                      id="profileName"
                      name="profileName"
                      value={profileName}
                      disabled
                      className="min-w-full h-9 p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                    >
                      <option value={profileName}>{profileName}</option>
                    </select>
                  </div>
                </div>

                {/* Project Name in another row */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="projectId" className="font-medium text-gray-700 text-xs">
                    Project Name
                  </label>
                  <select
                    id="projectId"
                    name="projectId" // Match the key in formData
                    value={formData.projectId}
                    onChange={handleChange}
                    className="min-w-full h-9 p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                  >
                    <option value="">Select Project</option>
                    {projects.map((project) => (
                      <option key={project.project_id} value={project.project_id}>
                        {project.project_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Hours and Minutes Spent in a single row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="hoursSpent" className="font-medium text-gray-700 text-xs">
                      Hours Spent
                    </label>
                    <input
                      type="text"
                      id="hoursSpent"
                      name="hoursSpent"
                      value={formData.hoursSpent}
                      onChange={handleChange}
                      className="min-w-full h-9 p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label htmlFor="minutesSpent" className="font-medium text-gray-700 text-xs">
                      Minutes Spent
                    </label>
                    <input
                      type="text"
                      id="minutesSpent"
                      name="minutesSpent"
                      value={formData.minutesSpent}
                      onChange={handleChange}
                      className="min-w-full h-9 p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                    />
                  </div>
                </div>

                {/* Activity and Action */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="status" className="font-medium text-gray-700 text-xs">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="min-w-full h-9 p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                    >
                      <option value="">--Select--</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label htmlFor="billingStatus" className="font-medium text-gray-700 text-xs">
                      Action
                    </label>
                    <select
                      id="billingStatus"
                      name="billingStatus"
                      value={formData.billingStatus}
                      onChange={handleChange}
                      className="min-w-full h-9 p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                    >
                      <option>--Select--</option>
                      <option>Billable</option>
                      <option>Non-Billable</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="notes" className="font-medium text-gray-700 text-xs">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="min-w-full h-20 p-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs resize-y"
                    placeholder="Enter your notes here"
                  ></textarea>
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="flex space-x-3 justify-center">
                  <button
                    type="submit"
                    className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                  >
                    Submit
                  </button>
                </div>
              </form>
                </div>


                <div className="w-full sm:min-w-[600px] h-[50vh] bg-white border-gray-300 border-t m-0 lg:m-5 shadow-xl rounded overflow-auto sm:mt-0">
                  <div className="text-center font-bold text-xl p-2 border-b-2">
                    Weekly Summary
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr>
                          <th className="p-2 border-b text-left">Date</th>
                          <th className="p-2 border-b text-left">
                            Daily Timeout
                          </th>
                          <th className="p-2 border-b text-left">Avlb/Ot</th>
                          <th className="p-2 border-b text-left">Bill Hrs</th>
                          <th className="p-2 border-b text-left">Non Hours</th>
                        </tr>
                      </thead>
                      <tbody>
     
                        <tr>
                          <td className="p-2 border-b">12/01/2024</td>
                          <td className="p-2 border-b">2 hrs</td>
                          <td className="p-2 border-b">8 hrs</td>
                          <td className="p-2 border-b">7 hrs</td>
                          <td className="p-2 border-b">1 hr</td>
                        </tr>
                        <tr>
                          <td className="p-2 border-b">12/02/2024</td>
                          <td className="p-2 border-b">1.5 hrs</td>
                          <td className="p-2 border-b">7 hrs</td>
                          <td className="p-2 border-b">6 hrs</td>
                          <td className="p-2 border-b">0.5 hrs</td>
                        </tr>
                        <tr>
                          <td className="p-2 border-b">12/03/2024</td>
                          <td className="p-2 border-b">3 hrs</td>
                          <td className="p-2 border-b">9 hrs</td>
                          <td className="p-2 border-b">8 hrs</td>
                          <td className="p-2 border-b">2 hrs</td>
                        </tr>
                        <tr>
                          <td className="p-2 border-b">12/04/2024</td>
                          <td className="p-2 border-b">1 hr</td>
                          <td className="p-2 border-b">8 hrs</td>
                          <td className="p-2 border-b">7 hrs</td>
                          <td className="p-2 border-b">1 hr</td>
                        </tr>
                        <tr>
                          <td className="p-2 border-b">12/05/2024</td>
                          <td className="p-2 border-b">2.5 hrs</td>
                          <td className="p-2 border-b">8 hrs</td>
                          <td className="p-2 border-b">7.5 hrs</td>
                          <td className="p-2 border-b">1 hr</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Timesheet Table */}
              <div className="min-w-screen mt-8 ml-0 lg:mb-32 rounded">
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto rounded border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">
                          S No.
                        </th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">
                          Date
                        </th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">
                          Client Name
                        </th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">
                          Project Name
                        </th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">
                          Status
                        </th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">
                          Total Time
                        </th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">
                          {/* Status */}
                        </th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">
                          Action
                        </th>
                        <th className="p-3 text-left text-sm font-semibold text-gray-700">
                          Approval status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
            {standups.length > 0 ? (
              standups.map((standup, index) => (
                <tr className="border-b hover:bg-gray-100" key={standup.standup_id}>
                  <td className="p-3 text-sm text-gray-600">{index + 1}</td>
                  <td className="p-3 text-sm text-gray-600">{standup.standup_date}</td>
                  <td className="p-3 text-sm text-gray-600">{standup.client_name}</td>
                  <td className="p-3 text-sm text-gray-600">{standup.project_name}</td>
                  <td className="p-3 text-sm text-gray-600">{standup.status}</td>
                  <td className="p-3 text-sm text-gray-600">
                    {standup.hours}h {standup.minutes}m
                  </td>
                  <td className="p-3 text-sm text-gray-600">Submitted</td>
                  <td className="p-3 text-sm text-gray-600">{standup.billing_status}</td>
                  
                  <td className="p-3 text-sm text-gray-600">{standup.approval_status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="p-3 text-sm text-gray-600 text-center">
                  No standup entries available.
                </td>
              </tr>
            )}
          </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashBoard;


