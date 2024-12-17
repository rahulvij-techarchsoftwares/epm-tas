// import React, { useState, useEffect } from 'react';
// import { Calendar, Clock, DollarSign, User, ThumbsUp, ThumbsDown, Briefcase, Building } from 'lucide-react';
// import { format } from 'date-fns';
// import './Teamstandup.css';

// const Teamstandup = () => {
//   const [activeTab, setActiveTab] = useState('daily');
//   const [standups, setStandups] = useState([]); // Daily standups data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // Error state

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const today = format(new Date(), 'EEEE, MMM do, yyyy'); // Current date

//   useEffect(() => {
//     // Fetch the daily standups data with authorization
//     const fetchStandups = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const token = localStorage.getItem('token'); // Retrieve token from localStorage
//         console.log(token);
//         if (!token) {
//           throw new Error('User is not authenticated. Please log in.');
//         }

//         const response = await fetch('http://localhost:5000/api/all-standups', {
//           headers: {
//             Authorization: `Bearer ${token}`, // Send token in the Authorization header
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch standups');
//         }

//         const data = await response.json();
//         setStandups(data.standups || []); // Update standups state
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStandups();
//   }, []);

//   return (
//     <div className="standup-container">
//       <div className="standup-card">
//         {/* Header Section */}
//         <div className="header">
//           <span className="logo-container">
//             <img
//               src="https://tasoftwares.wpengine.com/wp-content/uploads/2021/01/tas-logo1.png"
//               alt="Logo"
//               className="logo"
//             />
//             <div className="date-info">
//               <Calendar className="calendar-icon" />
//               <span>{today}</span>
//             </div>
//           </span>
//         </div>

//         {/* Tab Buttons */}
//         <div className="tab-buttons">
//           <button
//             onClick={() => handleTabClick('daily')}
//             className={`tab-button ${activeTab === 'daily' ? 'active' : ''}`}
//           >
//             Daily Standups
//           </button>
//         </div>

//         {/* Daily Standups Section */}
//         {activeTab === 'daily' && (
//           <div>
//             {loading ? (
//               <p>Loading standups...</p>
//             ) : error ? (
//               <p className="error-text">{error}</p>
//             ) : standups.length > 0 ? (
//               standups.map((standup, index) => (
//                 <div key={index} className="standup-item">
//                   {/* Header Section */}
//                   <div className="standup-header">
//                     <div className="user-info">
//                       <User className="user-icon" />
//                       <h3 className="user-name">{standup.name}</h3>
//                     </div>
//                     <span className={`status ${standup.online ? 'online' : 'offline'}`}>
//                       {standup.online ? 'Online' : 'Offline'}
//                     </span>
//                   </div>

//                   {/* Standup Details */}
//                   <div className="standup-details">
//                     <Briefcase className="briefcase-icon" />
//                     <span className="project-name">{standup.project}</span>
//                     <Building className="building-icon" />
//                     <span className="department">{standup.department}</span>
//                     <Clock className="clock-icon" />
//                     <span className="hours">{standup.hours}h {standup.minutes}m</span>
//                     <DollarSign className="dollar-icon" />
//                     <span className="status-text">{standup.billing_status ? 'Billable' : 'Non-billable'}</span>
//                   </div>

//                   {/* Notes */}
//                   <p className="details-text">{standup.notes}</p>

//                   {/* Actions */}
//                   <div className="actions">
//                     <button className="approve-btn">
//                       <ThumbsUp className="thumbs-up-icon" />
//                       Approve
//                     </button>
//                     <button className="reject-btn">
//                       <ThumbsDown className="thumbs-down-icon" />
//                       Reject
//                     </button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No standups found for today.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Teamstandup;


// import React, { useState, useEffect } from 'react';
// // import './Reviewstandup.css'; // Import the CSS file

// // Component for Standup History
// function Teamstandup() {
//   const [standups, setStandups] = useState([]);

//   useEffect(() => {
//     // Fetch all standup history data from the backend (replace with your API call)
//     const fetchStandups = async () => {
//       const response = await fetch('/api/standups'); // Adjust the API endpoint as needed
//       const data = await response.json();
//       setStandups(data);
//     };

//     fetchStandups();
//   }, []);

//   const stats = {
//     total: standups.length,
//     online: standups.filter(s => s.status === 'Online').length,
//     billable: standups.filter(s => s.billing_status === 'Billable').length,
//     approved: standups.filter(s => s.approval_status === 'Approved').length,
//   };

//   return (
//     <div className="reviewapp-container">
//       <div className="reviewapp-header">
//         <div>
//           <h1 className="reviewapp-title">
//             <span className="reviewclock-icon" /> Standup History
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
//               <th>Approval Status</th>
//               <th>Standup date</th>
//               <th>Reviewed Date</th>
//               <th>Reviewed By</th>
//             </tr>
//           </thead>
//           <tbody>
//             {standups.map(standup => (
//               <tr key={standup.standup_id}>
//                 <td>
//                   <div className="reviewemployee-info">
//                     <img src={standup.avatar} alt={standup.username} className="reviewemployee-avatar" />
//                     {standup.username}
//                   </div>
//                 </td>
//                 <td>{standup.project_name}</td>
//                 <td>
//                   <div className={`reviewstatus ${standup.status === 'Online' ? 'reviewonline' : 'reviewoffline'}`}>
//                     {standup.status}
//                   </div>
//                 </td>
//                 <td>{standup.hours}h {standup.minutes}m</td>
//                 <td>{standup.billing_status}</td>
//                 <td>{standup.notes}</td>
//                 <td>{standup.approval_status}</td>
//                 <td>{standup.reviewed_date ? new Date(standup.reviewed_date).toLocaleDateString() : '-'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Teamstandup;




import React, { useState, useEffect } from 'react';
// import './Reviewstandup.css'; // Import the CSS file
import { API_URL } from '../../../authapi/authapi';

// Component for Standup History
function Teamstandup() {
  const [standups, setStandups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandups = async () => {
      const token = localStorage.getItem('token'); // or wherever you store the token

      if (!token) {
        console.error('No token found!');
        return;
      }

      try {
        const response = await fetch(`${API_URL}/api/standups/department`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Attach the token to the request
          },
        });

        if (response.status === 403) {
          console.error('Unauthorized access - 403');
        }

        const data = await response.json();
        setStandups(data);
      } catch (error) {
        console.error('Error fetching standups:', error);
      }
    };

    fetchStandups();
  }, []);

  const stats = {
    total: standups.length,
    online: standups.filter(s => s.status === 'Online').length,
    billable: standups.filter(s => s.billing_status === 'Billable').length,
    approved: standups.filter(s => s.approval_status === 'Approved').length,
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="reviewapp-container">
      <div className="reviewapp-header">
        <div>
          <h1 className="reviewapp-title">
            <span className="reviewclock-icon" /> Standup History
          </h1>
          <p className="reviewdate">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
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
          <div className="reviewstat-icon"><span className="reviewusers-icon" /></div>
          <div>
            <p className="reviewstat-title">Total Standups</p>
            <p className="reviewstat-value">{stats.total}</p>
          </div>
        </div>
        <div className="reviewstat-card">
          <div className="reviewstat-icon"><span className="reviewonline-icon" /></div>
          <div>
            <p className="reviewstat-title">Online Now</p>
            <p className="reviewstat-value">{stats.online}</p>
          </div>
        </div>
        <div className="reviewstat-card">
          <div className="reviewstat-icon"><span className="reviewbilling-icon" /></div>
          <div>
            <p className="reviewstat-title">Billable Hours</p>
            <p className="reviewstat-value">{stats.billable}</p>
          </div>
        </div>
        <div className="reviewstat-card">
          <div className="reviewstat-icon"><span className="reviewapproved-icon" /></div>
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
              <th>Approval Status</th>
              <th>Standup date</th>
              <th>Reviewed Date</th>
              <th>Reviewed By</th>
            </tr>
          </thead>
          <tbody>
            {standups.map(standup => (
              <tr key={standup.standup_id}>
                <td>
                  <div className="reviewemployee-info">
                    <img src={standup.avatar} alt={standup.username} className="reviewemployee-avatar" />
                    {standup.username}
                  </div>
                </td>
                <td>{standup.project_name}</td>
                <td>
                  <div className={`reviewstatus ${standup.status === 'Online' ? 'reviewonline' : 'reviewoffline'}`}>
                    {standup.status}
                  </div>
                </td>
                <td>{standup.hours}h {standup.minutes}m</td>
                <td>{standup.billing_status}</td>
                <td>{standup.notes}</td>
                <td>{standup.approval_status}</td>
                <td>{standup.reviewed_date ? new Date(standup.reviewed_date).toLocaleDateString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teamstandup;
