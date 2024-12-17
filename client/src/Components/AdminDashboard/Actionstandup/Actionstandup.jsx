import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from '../../../authapi/authapi';

function Actionstandup() {
  const [standups, setStandups] = useState([]); // State to hold standup records
  const [loading, setLoading] = useState(true); // State to show loading status
  const [error, setError] = useState(null); // State to handle errors

  const fetchStandups = async () => {
    try {
        const response = await fetch(`${API_URL}/api/all-standups`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setStandups(data.data); 
    } catch (error) {
        console.error("Failed to fetch standups:", error.message);
    }
};

const handleAction = async (standup_id, status) => {
  try {
    const response = await fetch(`${API_URL}/api/standups/action-review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ standup_id, status }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message); // Display success message

      // Update the standup status in the state
      setStandups((prevStandups) =>
        prevStandups.map((standup) =>
          standup.standup_id === standup_id
            ? { ...standup, approval_status: status }
            : standup
        )
      );
    } else {
      alert(data.message || "Failed to update the standup status.");
    }
  } catch (error) {
    console.error("Error updating standup status:", error);
    alert("An error occurred. Please try again later.");
  }
};

useEffect(() => {
    fetchStandups();
}, []);


  if (error) {
    return <div className="text-red-500">{error}</div>;
  }
  return (
    <div className="p-3 ml-0 border-t overflow-auto sm:min-w-[600px] rounded-lg shadow-lg mb-5 lg:mb-0">
      <h2 className="text-2xl font-bold text-center text-black p-2 mb-5">Standup Records</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-xs font-medium text-gray-700 text-center">Date</th>
              <th className="p-2 text-xs font-medium text-gray-700 text-center">Project Name</th>
              <th className="p-2 text-xs font-medium text-gray-700 text-center">Client Name</th>
              <th className="p-2 text-xs font-medium text-gray-700 text-center">Time Spent</th>
              <th className="p-2 text-xs font-medium text-gray-700 text-center">Activity</th>
              <th className="p-2 text-xs font-medium text-gray-700 text-center">Action</th>
              <th className="p-2 text-xs font-medium text-gray-700 text-center">Notes</th>
              <th className="p-2 text-xs font-medium text-gray-700 text-center">Response</th>
            </tr>
          </thead>

          <tbody>
      {standups.map((standup) => (
        <tr className="border-b" key={standup.standup_id}>
          <td className="p-2 text-xs text-gray-700 text-center">
            {new Date(standup.standup_date).toLocaleDateString()}
          </td>
          <td className="p-2 text-xs text-gray-700 text-center">{standup.project_name}</td>
          <td className="p-2 text-xs text-gray-700 text-center">{standup.username}</td>
          <td className="p-2 text-xs text-gray-700 text-center">
            {standup.hours} hours {standup.minutes} minutes
          </td>
          <td className="p-2 text-xs text-gray-700 text-center">{standup.status}</td>
          <td className="p-2 text-xs text-gray-700 text-center">{standup.billing_status}</td>
          <td className="p-2 text-xs text-gray-700 text-center">{standup.notes}</td>
          <td className="p-2 text-xs text-gray-700 text-center">
            <button
              className="px-2 py-1 bg-green-600 text-white rounded-md mr-2 mb-2 lg:mb-0 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => handleAction(standup.standup_id, "Approved")}
            >
              Approve
            </button>
            <button
              className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => handleAction(standup.standup_id, "Declined")}
            >
              Decline
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

export default Actionstandup;