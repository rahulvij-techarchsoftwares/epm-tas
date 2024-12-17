// import React from 'react';
// // import './Sidebar.css';
// import { Link } from "react-router-dom";



// const Tlsidebar = () => {
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
//             <Link to="/team-leader/dashboard">Standup</Link>
//           </li>

//           <li>
//             <Link to="/team-leader/dashboard/stand-up-history">StandUp History</Link>
//           </li>

//           <li>
//             <Link to="/team-leader/dashboard/team-standup-history">Team StandUp History</Link>
//           </li>
        
//       </ul>
//     </div>
//   );
// };

// export default Tlsidebar;


// import React from 'react';
// // import './Sidebar.css';
// import { Link } from "react-router-dom";



// const Membersidebar = () => {
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
//             <Link to="/team-member/dashboard/stand-up">Standup</Link>
//           </li>

//           <li>
//             <Link to="/team-member/dashboard/stand-up-history">StandUp History</Link>
//           </li>
        
//       </ul>
//     </div>
//   );
// };

// export default Membersidebar;


import React from 'react';
import { Link } from "react-router-dom";


const Tlsidebar = () => {
  return (
    <div className="sidebarcontainer">
      {/* Fix the id for the checkbox */}
      <input type="checkbox" id="sidebarcheck" />
      {/* Match the htmlFor attribute with checkbox id */}
      <label htmlFor="sidebarcheck">
        <i className="fas fa-bars sidebaricon-button" id="sidebarbtn"></i>
        <i className="fas fa-times sidebaricon-button" id="sidebarcancel"></i>
      </label>


      <div className="sidebarsidebar">
        <header className="sidebarsidebar-header">Menu</header>
        <a href="#" className="sidebarsidebar-link sidebaractive">
          <i className="fas fa-qrcode"></i>
          <span>Dashboard</span>
        </a>

        
        <Link className="sidebarsidebar-link" to="/team-leader/dashboard/teamleader-stand-up">
        <i className="fas fa-link"></i>
        <span>Standup</span>
        </Link>
        
        <Link className="sidebarsidebar-link" to="/team-leader/dashboard/team-standup-history">
        <i className="fas fa-stream"></i>
        <span>Standup History</span>
        </Link>


        <Link className="sidebarsidebar-link" to="/team-leader/dashboard/team-review-standups">
        <i className="fas fa-stream"></i>
        <span>Review Standups</span>
        </Link>


        <Link className="sidebarsidebar-link" to="/team-leader/dashboard/request-leave-form">
        <i className="fas fa-stream"></i>
        <span>Request leave</span>
        </Link>


        {/* <a href="#" className="sidebarsidebar-link">
          <i className="fas fa-calendar"></i>
          <span>Events</span>
        </a>
        <a href="#" className="sidebarsidebar-link">
          <i className="far fa-question-circle"></i>
          <span>About</span>
        </a>
        <a href="#" className="sidebarsidebar-link">
          <i className="fas fa-sliders-h"></i>
          <span>Services</span>
        </a>
        <a href="#" className="sidebarsidebar-link">
          <i className="far fa-envelope"></i>
          <span>Contact</span>
        </a> */}
      </div>

      {/* <div className="frame">
        <p className="frame-text">Responsive</p>
        <h2 className="frame-title">SIDE BAR</h2>
        <p className="frame-text">in Pure CSS</p>
      </div> */}
    </div>
  );
};

export default Tlsidebar;

