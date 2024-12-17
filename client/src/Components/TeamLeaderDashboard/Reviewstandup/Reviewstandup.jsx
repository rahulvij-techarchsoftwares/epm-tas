// import React from 'react';
// import './Reviewstandup.css';
// import { Calendar } from 'lucide-react';
// import { CheckCircle2, XCircle } from 'lucide-react';


// const Reviewstandup = () => {

//     // Assuming StandupEntry type is defined elsewhere or replace with a simple type
// const StandupDashboard = ({ standups }) => {
//     const getStatusBadge = (status) => {
//       if (status === null) return (
//         <span className="badge-pending">
//           Pending
//         </span>
//       );
//       return status ? (
//         <span className="badge-approved">
//           Approved
//         </span>
//       ) : (
//         <span className="badge-rejected">
//           Rejected
//         </span>
//       );
//     };
// };
//   return (

//     <div className="dashboard">
//       <div className="header">
//         <h1 className="title">Team Standups</h1>
//         <div className="current-date">
//           <Calendar className="calendar-icon" size={16} />
//           {new Date().toLocaleDateString('en-US', { 
//             weekday: 'long', 
//             year: 'numeric', 
//             month: 'long', 
//             day: 'numeric' 
//           })}
//         </div>
//       </div>
//       <div className="review-status">
//         <table className="standup-table">
//           <thead>
//             <tr>
//               <th>Member</th>
//               <th>Project</th>
//               <th>Time</th>
//               <th>Standup Date</th>
//               <th>Status</th>
//               <th>Reviewed By</th>
//               <th>Review Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {standups.map((standup) => (
//               <tr key={standup.id}>
//                 <td>{standup.memberName}</td>
//                 <td>{standup.projectName}</td>
//                 <td>{standup.hours}h {standup.minutes}m</td>
//                 <td>{standup.date}</td>
//                 <td>{getStatusBadge(standup.isApproved)}</td>
//                 <td>{standup.reviewedBy || '-'}</td>
//                 <td>{standup.reviewedDate || '-'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
    
//   );
// };

// export default Reviewstandup;


// import React, { useState } from 'react';
// import './Reviewstandup.css'; // Import the CSS file

// // Component for App
// function Reviewstandup() {
//   const [standups, setStandups] = useState([
//     {
//       id: 1,
//       username: "Sarah Chen",
//       projectName: "E-commerce Platform",
//       status: "online",
//       hours: 4,
//       minutes: 30,
//       billingStatus: "billable",
//       notes: "Completed user authentication flow and started working on payment integration",
//       approved: null,
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
//     },
//     {
//       id: 2,
//       username: "Alex Rodriguez",
//       projectName: "CRM Dashboard",
//       status: "offline",
//       hours: 3,
//       minutes: 45,
//       billingStatus: "billable",
//       notes: "Fixed critical bugs in reporting module and updated documentation",
//       approved: null,
//       avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
//     },
//     {
//       id: 3,
//       username: "Emma Watson",
//       projectName: "Mobile App",
//       status: "online",
//       hours: 5,
//       minutes: 15,
//       billingStatus: "non-billable",
//       notes: "Team meeting and sprint planning for next iteration",
//       approved: null,
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
//     }
//   ]);

//   const handleApproval = (id, approved) => {
//     setStandups(standups.map(standup => standup.id === id ? { ...standup, approved } : standup));
//   };

//   const stats = {
//     total: standups.length,
//     online: standups.filter(s => s.status === 'online').length,
//     billable: standups.filter(s => s.billingStatus === 'billable').length,
//     approved: standups.filter(s => s.approved === true).length
//   };

//   return (
//     <div className="reviewapp-container">
//       <div className="reviewapp-header">
//         <div>
//           <h1 className="reviewapp-title">
//             <span className="reviewclock-icon" /> Daily Standup Reviews
//           </h1>
//           <p className="reviewdate">
//             {new Date().toLocaleDateString('en-US', { 
//               weekday: 'long', 
//               year: 'numeric', 
//               month: 'long', 
//               day: 'numeric' 
//             })}
//           </p>
//         </div>
//         <button className="reviewfilter-button">
//           <span className="reviewfilter-icon" />
//           Filter View
//         </button>
//       </div>

//       <div className="reviewstats-grid">
//         <div className="reviewstat-card">
//           <div className="reviewstat-icon"><span className="reviewusers-icon" /></div>
//           <div>
//             <p className="reviewstat-title">Total Standups</p>
//             <p className="reviewstat-value">{stats.total}</p>
//           </div>
//         </div>
//         <div className="reviewstat-card">
//           <div className="reviewstat-icon"><span className="reviewonline-icon" /></div>
//           <div>
//             <p className="reviewstat-title">Online Now</p>
//             <p className="reviewstat-value">{stats.online}</p>
//           </div>
//         </div>
//         <div className="reviewstat-card">
//           <div className="reviewstat-icon"><span className="reviewbilling-icon" /></div>
//           <div>
//             <p className="reviewstat-title">Billable Hours</p>
//             <p className="reviewstat-value">{stats.billable}</p>
//           </div>
//         </div>
//         <div className="reviewstat-card">
//           <div className="reviewstat-icon"><span className="reviewapproved-icon" /></div>
//           <div>
//             <p className="reviewstat-title">Approved</p>
//             <p className="reviewstat-value">{stats.approved}</p>
//           </div>
//         </div>
//       </div>

//       <div className="reviewsearch-container">
//         <input 
//           className="reviewsearch-input"
//           placeholder="Search by name, project, or notes..." 
//         />
//       </div>

//       <div className="reviewtable-container">
//         <table className="reviewstandup-table">
//           <thead>
//             <tr>
//               <th>Employee</th>
//               <th>Project</th>
//               <th>Status</th>
//               <th>Duration</th>
//               <th>Billing</th>
//               <th>Notes</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {standups.map(standup => (
//               <tr key={standup.id}>
//                 <td>
//                   <div className="reviewemployee-info">
//                     <img src={standup.avatar} alt={standup.username} className="reviewemployee-avatar" />
//                     {standup.username}
//                   </div>
//                 </td>
//                 <td>{standup.projectName}</td>
//                 <td>
//                   <div className={`reviewstatus ${standup.status === 'online' ? 'reviewonline' : 'reviewsCcDsdcoffline'}`}>
//                     {standup.status}
//                   </div>
//                 </td>
//                 <td>{standup.hours}h {standup.minutes}m</td>
//                 <td>{standup.billingStatus}</td>
//                 <td>{standup.notes}</td>
//                 <td>
//                   <button className="reviewapprove-button" onClick={() => handleApproval(standup.id, true)}>
//                     Approve
//                   </button>
//                   <button className="reviewreject-button" onClick={() => handleApproval(standup.id, false)}>
//                     Reject
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Reviewstandup;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Reviewstandup.css";

// function Reviewstandup() {
//   const [standups, setStandups] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch standups from API
//   useEffect(() => {
//     const fetchStandups = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:5000/api/all-standups", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         setStandups(response.data.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch standups.");
//         setLoading(false);
//       }
//     };
//     fetchStandups();
//   }, []);

//   const handleApproval = async (standup_id, status) => {
//     try {
//       // Ensure status is correctly passed (Approve or Declined)
//       const finalStatus = status === "Rejected" ? "Declined" : status;
  
//       const response = await axios.post(
//         "http://localhost:5000/api/standups/action-review",
//         { standup_id, status: finalStatus },
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
  
//       // Update the standups list with the new approval status
//       setStandups((prevStandups) =>
//         prevStandups.map((standup) =>
//           standup.standup_id === standup_id
//             ? { ...standup, approval_status: finalStatus }
//             : standup
//         )
//       );
  
//       alert(response.data.message);
//     } catch (err) {
//       console.error("Error occurred:", err.response || err);
//       alert("Failed to update standup status.");
//     }
//   };
  
//   const stats = {
//     total: standups.length,
//     online: standups.filter((s) => s.status === "online").length,
//     billable: standups.filter((s) => s.billing_status === "billable").length,
//     approved: standups.filter((s) => s.approval_status === "Approved").length,
//   };

//   if (loading) return <div>Loading standups...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="reviewapp-container">
//       <div className="reviewapp-header">
//         <div>
//           <h1 className="reviewapp-title">
//             <span className="reviewclock-icon" /> Daily Standup Reviews
//           </h1>
//           <p className="reviewdate">
//             {new Date().toLocaleDateString("en-US", {
//               weekday: "long",
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//         </div>
//         <button className="reviewfilter-button">
//           <span className="reviewfilter-icon" />
//           Filter View
//         </button>
//       </div>

//       <div className="reviewstats-grid">
//         <div className="reviewstat-card">
//           <div className="reviewstat-icon">
//             <span className="reviewusers-icon" />
//           </div>
//           <div>
//             <p className="reviewstat-title">Total Standups</p>
//             <p className="reviewstat-value">{stats.total}</p>
//           </div>
//         </div>
//         <div className="reviewstat-card">
//           <div className="reviewstat-icon">
//             <span className="reviewonline-icon" />
//           </div>
//           <div>
//             <p className="reviewstat-title">Online Now</p>
//             <p className="reviewstat-value">{stats.online}</p>
//           </div>
//         </div>
//         <div className="reviewstat-card">
//           <div className="reviewstat-icon">
//             <span className="reviewbilling-icon" />
//           </div>
//           <div>
//             <p className="reviewstat-title">Billable Hours</p>
//             <p className="reviewstat-value">{stats.billable}</p>
//           </div>
//         </div>
//         <div className="reviewstat-card">
//           <div className="reviewstat-icon">
//             <span className="reviewapproved-icon" />
//           </div>
//           <div>
//             <p className="reviewstat-title">Approved</p>
//             <p className="reviewstat-value">{stats.approved}</p>
//           </div>
//         </div>
//       </div>

//       <div className="reviewsearch-container">
//         <input
//           className="reviewsearch-input"
//           placeholder="Search by name, project, or notes..."
//         />
//       </div>

//       <div className="reviewtable-container">
//         <table className="reviewstandup-table">
//           <thead>
//             <tr>
//               <th>Employee</th>
//               <th>Project</th>
//               <th>Status</th>
//               <th>Duration</th>
//               <th>Billing</th>
//               <th>Notes</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {standups.map((standup) => (
//               <tr key={standup.standup_id}>
//                 <td>
//                   <div className="reviewemployee-info">
//                     <img
//                       src={standup.avatar}
//                       alt={standup.username}
//                       className="reviewemployee-avatar"
//                     />
//                     {standup.username}
//                   </div>
//                 </td>
//                 <td>{standup.project_name}</td>
//                 <td>
//                   <div
//                     className={`reviewstatus ${
//                       standup.status === "online"
//                         ? "reviewonline"
//                         : "reviewoffline"
//                     }`}
//                   >
//                     {standup.status}
//                   </div>
//                 </td>
//                 <td>
//                   {standup.hours}h {standup.minutes}m
//                 </td>
//                 <td>{standup.billing_status}</td>
//                 <td>{standup.notes}</td>
//                 <td>
//                   <button
//                     className="reviewapprove-button"
//                     onClick={() => handleApproval(standup.standup_id, "Approved")}
//                   >
//                     Approve
//                   </button>
//                   <button
//                     className="reviewreject-button"
//                     onClick={() =>
//                       handleApproval(standup.standup_id, "Rejected")
//                     }
//                   >
//                     Reject
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Reviewstandup;




import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Reviewstandup.css";
import { API_URL } from '../../../authapi/authapi';

function Reviewstandup() {
  const [standups, setStandups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch standups from API
  useEffect(() => {
    const fetchStandups = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/all-standups`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setStandups(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch standups.");
        setLoading(false);
      }
    };
    fetchStandups();
  }, []);

  const handleApproval = async (standup_id, status) => {
    try {
      // Ensure status is correctly passed (Approve or Decline)
      const finalStatus = status === "Rejected" ? "Declined" : status;

      const response = await axios.post(
        "http://localhost:5000/api/standups/action-review",
        { standup_id, status: finalStatus },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      // Update the standups list with the new approval status
      setStandups((prevStandups) =>
        prevStandups.map((standup) =>
          standup.standup_id === standup_id
            ? { ...standup, approval_status: finalStatus }
            : standup
        )
      );

      alert(response.data.message); // Show success message
    } catch (err) {
      console.error("Error occurred:", err.response || err);
      alert("Failed to update standup status.");
    }
  };

  const stats = {
    total: standups.length,
    online: standups.filter((s) => s.status === "online").length,
    billable: standups.filter((s) => s.billing_status === "billable").length,
    approved: standups.filter((s) => s.approval_status === "Approved").length,
  };

  if (loading) return <div>Loading standups...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="reviewapp-container">
      <div className="reviewapp-header">
        <div>
          <h1 className="reviewapp-title">
            <span className="reviewclock-icon" /> Daily Standup Reviews
          </h1>
          <p className="reviewdate">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <button className="reviewfilter-button">
          <span className="reviewfilter-icon" />
          Filter View
        </button>
      </div>

      <div className="reviewstats-grid">
        <div className="reviewstat-card">
          <div className="reviewstat-icon">
            <span className="reviewusers-icon" />
          </div>
          <div>
            <p className="reviewstat-title">Total Standups</p>
            <p className="reviewstat-value">{stats.total}</p>
          </div>
        </div>
        <div className="reviewstat-card">
          <div className="reviewstat-icon">
            <span className="reviewonline-icon" />
          </div>
          <div>
            <p className="reviewstat-title">Online Now</p>
            <p className="reviewstat-value">{stats.online}</p>
          </div>
        </div>
        <div className="reviewstat-card">
          <div className="reviewstat-icon">
            <span className="reviewbilling-icon" />
          </div>
          <div>
            <p className="reviewstat-title">Billable Hours</p>
            <p className="reviewstat-value">{stats.billable}</p>
          </div>
        </div>
        <div className="reviewstat-card">
          <div className="reviewstat-icon">
            <span className="reviewapproved-icon" />
          </div>
          <div>
            <p className="reviewstat-title">Approved</p>
            <p className="reviewstat-value">{stats.approved}</p>
          </div>
        </div>
      </div>

      <div className="reviewsearch-container">
        <input
          className="reviewsearch-input"
          placeholder="Search by name, project, or notes..."
        />
      </div>

      <div className="reviewtable-container">
        <table className="reviewstandup-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Project</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Billing</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {standups.map((standup) => (
              <tr key={standup.standup_id}>
                <td>
                  <div className="reviewemployee-info">
                    <img
                      src={standup.avatar}
                      alt={standup.username}
                      className="reviewemployee-avatar"
                    />
                    {standup.username}
                  </div>
                </td>
                <td>{standup.project_name}</td>
                <td>
                  <div
                    className={`reviewstatus ${
                      standup.status === "online"
                        ? "reviewonline"
                        : "reviewoffline"
                    }`}
                  >
                    {standup.status}
                  </div>
                </td>
                <td>
                  {standup.hours}h {standup.minutes}m
                </td>
                <td>{standup.billing_status}</td>
                <td>{standup.notes}</td>
                <td>
                  <button
                    className="reviewapprove-button"
                    onClick={() => handleApproval(standup.standup_id, "Approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="reviewreject-button"
                    onClick={() =>
                      handleApproval(standup.standup_id, "Rejected") // Sends 'Rejected', will be handled as 'Declined' in the backend
                    }
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reviewstandup;


