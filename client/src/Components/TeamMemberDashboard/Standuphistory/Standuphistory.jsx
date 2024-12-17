// import React from 'react'
// import { Users, Monitor, Clock, DollarSign, FileText, Pencil, Trash2 } from "lucide-react";
// import './Standuphistory.css';

// export const Standuphistory = () => {
//     const standupData = [
//         {
//           projectName: "Project Alpha",
//           mode: "Online",
//           hours: 4,
//           minutes: 30,
//           billingStatus: "Billable",
//           profileName: "John Developer",
//           notes: "Completed the authentication module and started working on the dashboard components.",
//         },
//         {
//           projectName: "Project Beta",
//           mode: "Offline",
//           hours: 2,
//           minutes: 45,
//           billingStatus: "Non-Billable",
//           profileName: "Sarah Designer",
//           notes: "Created wireframes for the new feature set.",
//         },
//       ];
    
//       return (
//         <div className="historycontainer">
//           {/* Main Card */}
//           <div className="historymain-card">
//             <div className="historycard-content">
//               {/* Title Section */}
//               <div className="historytitle-section">
//                 <div>
//                   <h1 className="historytitle">Daily Standup Records</h1>
//                   <p className="historysubtitle">Track and manage your team's daily standup details</p>
//                 </div>
//                 <div className="historydate-section">
//                   <Clock className="historyclock-icon" />
//                   {new Date().toLocaleDateString()}
//                 </div>
//               </div>
    
//               {/* Table */}
//               <div className="historytable-container">
//                 <table className="historytable">
//                   {/* Table Header */}
//                   <thead>
//                     <tr className="historytable-header">
//                       <th className="historytable-cell">Project Name</th>
//                       <th className="historytable-cell">Mode</th>
//                       <th className="historytable-cell">Duration</th>
//                       <th className="historytable-cell">Billing Status</th>
//                       <th className="historytable-cell">Profile</th>
//                       <th className="historytable-cell">Notes</th>
//                       <th className="historytable-cell">Actions</th>
//                     </tr>
//                   </thead>
    
//                   {/* Table Body */}
//                   <tbody>
//                     {standupData.map((record, index) => (
//                       <tr key={index} className="historytable-row">
//                         <td className="historytable-cell">
//                           <div className="historyflex-items">
//                             <FileText className="historyicon" />
//                             {record.projectName}
//                           </div>
//                         </td>
//                         <td className="historytable-cell">
//                           <div className={`historystatus-badge ${record.mode === "Online" ? "historyonline" : "historyoffline"}`}>
//                             <Monitor className="historyicon-small" />
//                             {record.mode}
//                           </div>
//                         </td>
//                         <td className="historytable-cell">
//                           <div className="historyflex-items">
//                             <Clock className="historyicon" />
//                             {record.hours}h {record.minutes}m
//                           </div>
//                         </td>
//                         <td className="historytable-cell">
//                           <div className={`historybilling-status ${record.billingStatus === "Billable" ? "historybillable" : "historynon-billable"}`}>
//                             <DollarSign className="historyicon-small" />
//                             {record.billingStatus}
//                           </div>
//                         </td>
//                         <td className="historytable-cell">
//                           <div className="historyflex-items">
//                             <Users className="historyicon" />
//                             {record.profileName}
//                           </div>
//                         </td>
//                         <td className="historytable-cell">
//                           <p className="historytruncate-text" title={record.notes}>
//                             {record.notes}
//                           </p>
//                         </td>
//                         <td className="historytable-cell">
//                           <div className="historyaction-buttons">
//                             <button 
//                               className="historyaction-button historyedit"
//                               onClick={() => console.log('Edit record:', record)}
//                             >
//                               <Pencil className="historyicon-small" />
//                             </button>
//                             <button 
//                               className="historyaction-button historydelete"
//                               onClick={() => console.log('Delete record:', record)}
//                             >
//                               <Trash2 className="historyicon-small" />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//   )
// }




import React from "react";
import { Edit2, Trash2, Circle } from "lucide-react";


function Standuphistory() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Alpha Card */}
        <ProjectCard
          title="Project Alpha"
          status={{ label: "Online", color: "green" }}
          duration="4h 30m"
          billing={{ label: "Billable", color: "blue" }}
          profile={{
            name: "John Developer",
            image:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          }}
          notes="Authentication module note"
        />

        {/* Project Beta Card */}
        <ProjectCard
          title="Project Beta"
          status={{ label: "Offline", color: "red" }}
          duration="2h 45m"
          billing={{ label: "Non-Billable", color: "gray" }}
          profile={{
            name: "Sarah Designer",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          }}
          notes="Wireframes note"
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, status, duration, billing, profile, notes }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span
          className={`flex items-center px-3 py-1 text-sm rounded-full bg-${status.color}-100 text-${status.color}-800`}
        >
          <Circle className="w-2 h-2 mr-2 fill-current" />
          {status.label}
        </span>
      </div>
      <div className="space-y-2">
        <InfoRow label="Duration:" value={duration} />
        <InfoRow
          label="Billing:"
          value={
            <span
              className={`px-2 py-1 text-xs rounded-full bg-${billing.color}-100 text-${billing.color}-800`}
            >
              {billing.label}
            </span>
          }
        />
        <InfoRow
          label="Profile:"
          value={
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full mr-2"
                src={profile.image}
                alt={profile.name}
              />
              {profile.name}
            </div>
          }
        />
        <InfoRow label="Notes:" value={notes} />
      </div>
      <div className="flex justify-end mt-4 space-x-4">
        <ActionButton
          icon={<Edit2 className="w-5 h-5 text-blue-600" />}
          hoverColor="blue"
        />
        <ActionButton
          icon={<Trash2 className="w-5 h-5 text-red-600" />}
          hoverColor="red"
        />
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center">
      <span className="w-24 text-sm font-medium text-gray-600">{label}</span>
      <span className="text-sm text-gray-800">{value}</span>
    </div>
  );
}

function ActionButton({ icon, hoverColor }) {
  return (
    <button
      className={`p-2 rounded-lg hover:bg-${hoverColor}-100 transition-all duration-200`}
    >
      {icon}
    </button>
  );
}

export default Standuphistory;
