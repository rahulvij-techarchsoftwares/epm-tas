import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";

export const Allprojects = () => {
  return (
    <div className="projecttop">
      {/* <Sidebar /> */}
      <div className="projectsubtop">
        <div className="projectcontainer">
          <div className="projectheader">
            <h1>Employees</h1>
            <div className="projectactions">
              <a href="#">
                <FontAwesomeIcon icon={faUpload} /> Import
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faDownload} /> Export
              </a>
              <button
                // onClick={() => navigate("/add-employee")}
                className="projectadd-customers"
              >
                Add Employee
              </button>
            </div>
          </div>
          <div className="projectsearch-box">
            <input type="text" placeholder="Search customer" />
            <FontAwesomeIcon icon={faSearch} className="projectfa-search" />
          </div>
        </div>

        <div className="projecttablecontainer">
          <h2>User Information</h2>
          <table>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>PROJECT NAME</th>
                <th>DESCRITION</th>
                <th>DEADLINE</th>
                <th>ASSIGNED DATE</th>
              </tr>
            </thead>
            {/* <tbody>
              {users.map((user, index) => (
                <tr key={user.user_id}>
                  <td>{index + 1}</td>
                  <td className="projecttableuser-info">
                    <img
                      src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.username}`}
                      alt={`Profile of ${user.username}`}
                      width="40"
                      height="40"
                    />
                    {user.username}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role_name}</td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  )
}
