// // import React, { useState } from 'react';
// // import './Leaveform.css';
// // import { LucideCalendar, LucidePlusCircle, X } from 'lucide-react';

// // function Leaveform() {
// //     const [leaves, setLeaves] = useState([
// //         { startDate: '', endDate: '', time: 'full-day', reason: 'sick', customReason: '' },
// //     ]);
// //     const [firstLeaveSaved, setFirstLeaveSaved] = useState(false);

// //     const addMoreLeave = () => {
// //         if (!firstLeaveSaved) {
// //             setFirstLeaveSaved(true);
// //             alert('First leave saved successfully!');
// //         }

// //         setLeaves([
// //             ...leaves,
// //             { startDate: '', endDate: '', time: 'full-day', reason: 'sick', customReason: '' },
// //         ]);
// //     };

// //     const removeLeave = (index) => {
// //         const updatedLeaves = [...leaves];
// //         updatedLeaves.splice(index, 1);
// //         setLeaves(updatedLeaves);
// //     };

// //     const handleInputChange = (index, field, value) => {
// //         const updatedLeaves = [...leaves];
// //         updatedLeaves[index][field] = value;
// //         setLeaves(updatedLeaves);
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         alert("Shortly, you will get a response.");
// //     };

// //     return (
// //         <div className="leaveleave-form-container">
// //             <div className="leaveform-wrapper">
// //                 <span>
// //                     <img
// //                         src="https://tasoftwares.wpengine.com/wp-content/uploads/2021/01/tas-logo1.png"
// //                         alt=""
// //                         className="leavelogo"
// //                     />
// //                     <h2 className="leaveform-title">Leave Form</h2>
// //                 </span>

// //                 {leaves.map((leave, index) => (
// //                     <div key={index} className="leaveleave-entry">
// //                         {index !== 0 && (
// //                             <button
// //                                 onClick={() => removeLeave(index)}
// //                                 className="leaveremove-btn"
// //                             >
// //                                 <X size={24} />
// //                             </button>
// //                         )}

// //                         {index === 0 && (
// //                             <div className="leaveinput-group">
// //                                 <label className="leavelabel">
// //                                     Employee Name <span className="leaverequired">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     placeholder="Enter employee name"
// //                                     className="leaveinput-field"
// //                                     required
// //                                 />
// //                             </div>
// //                         )}

// //                         <div className="leavedate-inputs">
// //                             <div className="leaveinput-group">
// //                                 <label className="leavelabel">
// //                                     Start Date <span className="leaverequired">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="date"
// //                                     value={leave.startDate}
// //                                     onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
// //                                     className="leaveinput-field"
// //                                     required
// //                                 />
// //                             </div>

// //                             <div className="leaveinput-group">
// //                                 <label className="leavelabel">
// //                                     End Date <span className="leaverequired">*</span>
// //                                 </label>
// //                                 <input
// //                                     type="date"
// //                                     value={leave.endDate}
// //                                     onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
// //                                     className="leaveinput-field"
// //                                     required
// //                                 />
// //                             </div>
// //                         </div>

// //                         <div className="leaveleave-options">
// //                             <div className="leaveinput-group">
// //                                 <label className="leavelabel">
// //                                     Leave type <span className="leaverequired">*</span>
// //                                 </label>
// //                                 <select
// //                                     required
// //                                     value={leave.time}
// //                                     onChange={(e) => handleInputChange(index, 'time', e.target.value)}
// //                                     className="leaveinput-field"
// //                                 >
// //                                     <option value="full-day">Full Day</option>
// //                                     <option value="half-day">Half Day</option>
// //                                 </select>
// //                             </div>

// //                             <div className="leaveinput-group">
// //                                 <label className="leavelabel">
// //                                     Leave Reason <span className="leaverequired">*</span>
// //                                 </label>
// //                                 <select
// //                                     required
// //                                     value={leave.reason}
// //                                     onChange={(e) => handleInputChange(index, 'reason', e.target.value)}
// //                                     className="leaveinput-field"
// //                                 >
// //                                     <option value="sick">Sick</option>
// //                                     <option value="function">Function</option>
// //                                     <option value="emergency">Emergency</option>
// //                                     <option value="custom">Custom</option>
// //                                 </select>
// //                             </div>
// //                         </div>

// //                         {leave.reason === 'custom' && (
// //                             <div className="leaveinput-group">
// //                                 <label className="leavelabel">Custom Reason</label>
// //                                 <input
// //                                     type="text"
// //                                     placeholder="Enter custom reason"
// //                                     className="leaveinput-field"
// //                                     value={leave.customReason}
// //                                     onChange={(e) => handleInputChange(index, 'customReason', e.target.value)}
// //                                 />
// //                             </div>
// //                         )}
// //                     </div>
// //                 ))}

// //                 <button
// //                     type="button"
// //                     onClick={addMoreLeave}
// //                     className="leaveadd-btn"
// //                 >
// //                     <LucidePlusCircle className="leaveicon" />
// //                     Add More Leave
// //                 </button>

// //                 <button
// //                     type="submit"
// //                     onClick={handleSubmit}
// //                     className="leavesubmit-btn"
// //                 >
// //                     Submit
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Leaveform;

// import React, { useState } from 'react';
// // import './Leaveform.css';

// function Leaveform() {
//     const [leave, setLeave] = useState({
//         startDate: '',
//         endDate: '',
//         time: 'Full Day',
//         reason: '',
//     });
//     const [error, setError] = useState('');

//     // Handle input changes
//     const handleInputChange = (field, value) => {
//         setLeave({
//             ...leave,
//             [field]: value,
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         // Validate form fields
//         const { startDate, endDate, time, reason } = leave;
//         if (!startDate || !endDate || !time || !reason) {
//             setError('Please fill in all fields before submitting.');
//             alert('Please fill in all fields before submitting.');
//             return;
//         }

//         try {
//             const response = await fetch('http://localhost:5000/api/leave/apply', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${localStorage.getItem('token')}`,
//                 },
//                 body: JSON.stringify({
//                     start_date: startDate,
//                     end_date: endDate,
//                     leave_type: time,
//                     leave_reason: reason,
//                 }),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 setError(errorData.message || 'Error applying for leave');
//                 alert(errorData.message || 'Error applying for leave');
//                 return;
//             }

//             alert('Leave submitted successfully!');
//             setLeave({ startDate: '', endDate: '', time: 'Full Day', reason: '' }); // Reset form
//         } catch (error) {
//             setError('Error applying for leave');
//             alert('Error applying for leave');
//             console.error('Error submitting leave:', error);
//         }
//     };

//     return (
//         <div className="leave-form-container">
//             <div className="leaveform-wrapper">
//                 <span>
//                     <img
//                         src="https://tasoftwares.wpengine.com/wp-content/uploads/2021/01/tas-logo1.png"
//                         alt=""
//                         className="leavelogo"
//                     />
//                     <h2 className="leaveform-title">Leave Form</h2>
//                 </span>

//                 <div className="leaveleave-entry">
//                     <div className="leavedate-inputs">
//                         <div className="leaveinput-group">
//                             <label className="leavelabel">
//                                 Start Date <span className="leaverequired">*</span>
//                             </label>
//                             <input
//                                 type="date"
//                                 value={leave.startDate}
//                                 onChange={(e) => handleInputChange('startDate', e.target.value)}
//                                 className="leaveinput-field"
//                                 required
//                             />
//                         </div>

//                         <div className="leaveinput-group">
//                             <label className="leavelabel">
//                                 End Date <span className="leaverequired">*</span>
//                             </label>
//                             <input
//                                 type="date"
//                                 value={leave.endDate}
//                                 onChange={(e) => handleInputChange('endDate', e.target.value)}
//                                 className="leaveinput-field"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     <div className="leaveleave-options">
//                         <div className="leaveinput-group">
//                             <label className="leavelabel">
//                                 Leave Type <span className="leaverequired">*</span>
//                             </label>
//                             <select
//                                 value={leave.time}
//                                 onChange={(e) => handleInputChange('time', e.target.value)}
//                                 className="leaveinput-field"
//                             >
//                                 <option value="Full Day">Full Day</option>
//                                 <option value="Half Day">Half Day</option>
//                             </select>
//                         </div>

//                         <div className="leaveinput-group">
//                             <label className="leavelabel">
//                                 Leave Reason <span className="leaverequired">*</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter leave reason"
//                                 value={leave.reason}
//                                 onChange={(e) => handleInputChange('reason', e.target.value)}
//                                 className="leaveinput-field"
//                                 required
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {error && <p className="leave-error">{error}</p>}

//                 <button type="submit" onClick={handleSubmit} className="leavesubmit-btn">
//                     Submit Leave
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Leaveform;

// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../authapi/authapi';

function LeaveForm() {
    const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
    leave_type: "",
    leave_reason: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fetch the leaves data when the component mounts
  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/leave/my-leaves`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming JWT is stored in localStorage
          },
        });
        setLeaves(response.data.leaves);
      } catch (err) {
        setError('Error fetching leaves data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaves();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.start_date ||
      !formData.end_date ||
      !formData.leave_type ||
      !formData.leave_reason
    ) {
      alert("Please provide all leave details");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/leave/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add Authorization header if needed (e.g., token from localStorage)
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Success message
        // Reset form
        setFormData({
          start_date: "",
          end_date: "",
          leave_type: "",
          leave_reason: "",
          
        });
        console.log(formData);
      } else {
        alert(result.message); // Error message
      }
    } catch (error) {
      console.error("Error submitting leave request:", error);
      alert("Error submitting leave request");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center py-10">
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg w-full md:w-2/3 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4 border-b-2 pb-2">
            Leave Form
          </h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Start Date */}
            <div>
              <label
                htmlFor="start-date"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* End Date */}
            <div>
              <label
                htmlFor="end-date"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Leave Type Dropdown */}
            <div>
              <label
                htmlFor="leave-type"
                className="block text-sm font-medium text-gray-700"
              >
                Leave Type
              </label>
              <select
                id="leave-type"
                name="leave_type"
                value={formData.leave_type}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Select Leave Type</option>
                <option value="Half Day">Half day</option>
                <option value="Full Day">Full day</option>
              </select>
            </div>

            {/* Leave Reason */}
            <div>
              <label
                htmlFor="leave-reason"
                className="block text-sm font-medium text-gray-700"
              >
                Leave Reason
              </label>
              <textarea
                id="leave-reason"
                name="leave_reason"
                rows="3"
                value={formData.leave_reason}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Table for Leave Records */}
      <div className="mt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto rounded  shadow-lg">
        <table className="min-w-full bg-white rounded border-l-2 border-r-2">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 text-sm font-medium text-gray-700">Start Date</th>
          <th className="px-4 py-3 text-sm font-medium text-gray-700">End Date</th>
          <th className="px-4 py-3 text-sm font-medium text-gray-700">Leave Type</th>
          <th className="px-4 py-3 text-sm font-medium text-gray-700">Status</th>
          <th className="px-4 py-3 text-sm font-medium text-gray-700">Approve Date</th>
          <th className="px-4 py-3 text-sm font-medium text-gray-700">Approved By</th>
          <th className="px-4 py-3 text-sm font-medium text-gray-700">Action</th>
        </tr>
      </thead>
      <tbody>
        {leaves.length > 0 ? (
          leaves.map((leave) => (
            <tr key={leave.leave_id} className="border-t border-gray-200">
              <td className="px-4 py-4 text-sm text-gray-600">{leave.start_date}</td>
              <td className="px-4 py-4 text-sm text-gray-600">{leave.end_date}</td>
              <td className="px-4 py-4 text-sm text-gray-600">{leave.leave_type}</td>
              <td className="px-4 py-4 text-sm text-gray-600">{leave.status}</td>
              <td className="px-4 py-4 text-sm text-gray-600">
                {leave.reviewed_date || 'N/A'}
              </td>
              <td className="px-4 py-4 text-sm text-gray-600">{leave.reviewed_by || 'N/A'}</td>
              <td className="px-4 py-4 text-sm">
                {leave.status}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="px-4 py-4 text-sm text-gray-600 text-center">
              No leave requests found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
        </div>
      </div>
    </>
  );
}

export default LeaveForm;
