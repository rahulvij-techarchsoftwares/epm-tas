import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import './Login.css';

import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { API_URL } from '../../authapi/authapi';
// import loginsecond from "../Assets/loginsecondpart.png";

export const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Send login request
  //     const response = await axios.post("http://localhost:5000/api/auth/login", {
  //       email,
  //       password,
  //     });

  //     const { token, role_id } = response.data;

  //     // Check if token and role_id are present
  //     if (!token || !role_id) {
  //       setError("Invalid response from server");
  //       return;
  //     }

  //     // Store token and role_id in local storage
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("role_id", role_id);

  //     // Redirect based on role
  //     switch (role_id) {
  //       case 1:
  //         navigate("/super-admin/dashboard");
  //         break;
  //       case 2:
  //         navigate("/admin/dashboard");
  //         break;
  //       case 3:
  //         navigate("/operation-head/dashboard");
  //         break;
  //       case 4:
  //         navigate("/hr/dashboard");
  //         break;
  //       case 5:
  //         navigate("/team-leader/dashboard");
  //         break;
  //       case 6:
  //         navigate("/team-member/dashboard");
  //         break;
  //       default:
  //         setError("Role not recognized");
  //     }
  //   } catch (err) {
  //     // Handle errors (network or server)
  //     if (err.response) {
  //       // Server responded with a status outside the 2xx range
  //       setError(err.response.data.message || "Invalid credentials");
  //     } else if (err.request) {
  //       // Request was made but no response received
  //       setError("Server is not responding. Please try again later.");
  //     } else {
  //       // Something else happened
  //       setError("An unexpected error occurred");
  //     }
  //     console.error("Login error:", err);
  //   }
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading when form is submitted

    try {
      // Send login request
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      const { token, role_id } = response.data;

      // Check if token and role_id are present
      if (!token || !role_id) {
        setError("Invalid response from server");
        setIsLoading(false); // Stop loading
        return;
      }

      // Store token and role_id in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("role_id", role_id);

      // Redirect based on role
      switch (role_id) {
        case 1:
          navigate("/super-admin/dashboard");
          break;
        case 2:
          navigate("/admin/dashboard");
          break;
        case 3:
          navigate("/operation-head/dashboard");
          break;
        case 4:
          navigate("/hr/dashboard");
          break;
        case 5:
          navigate("/team-leader/dashboard");
          break;
        case 6:
          navigate("/team-member/dashboard");
          break;
        default:
          setError("Role not recognized");
      }
    } catch (err) {
      // Handle errors (network or server)
      if (err.response) {
        setError(err.response.data.message || "Invalid credentials");
      } else if (err.request) {
        setError("Server is not responding. Please try again later.");
      } else {
        setError("An unexpected error occurred");
      }
      console.error("Login error:", err);
    } finally {
      setIsLoading(false); // Stop loading in case of success or failure
    }
  };

  return (
    // <div className="logintop">
    //   <div className="logingrid">
    //     {/* Login Form */}
    //     <div className="loginform">
    //       <div className="logincontainer">
    //         <h1>Welcome</h1>
    //         <p>Sign in to the internal platform</p>
    //         {error && <p className="error-message">{error}</p>}
    //         <form onSubmit={handleLogin}>
    //           {/* Email Input */}
    //           <div className="logintabs">
    //             <div className="logintab loginactive">Email</div>
    //           </div>
    //           <div className="logininput-container">
    //             <input
    //               type="email"
    //               placeholder="Email Address"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               required
    //             />
    //           </div>

    //           {/* Password Input */}
    //           <div className="logintabs">
    //             <div className="logintab loginactive">Password</div>
    //           </div>
    //           <div className="logininput-container">
    //             <input
    //               type="password"
    //               placeholder="Password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               required
    //             />
    //             <small>
    //               Enter a valid email and password as this is an integrated authentication system.
    //             </small>
    //           </div>

    //           {/* Submit Button */}
    //           <button type="submit" className="loginbutton">
    //             Login
    //           </button>
    //         </form>
    //       </div>
    //     </div>

    //     {/* Right Section */}
    //     <div className="loginsecond">
    //       <div className="loginbox">
    //         <div className="logintext">
    //           <h1>Welcome to Tech Arch Softwares</h1>
    //           <h1>Employee Performance System</h1>
    //         </div>
    //         <div className="loginboxiniside">
    //           <img className="loginsideimg" src={loginsecond} alt="Welcome" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="flex flex-col md:flex-row h-screen text-white md:justify-center">
      {/* Left Section */}
      <div id="recaptcha-container"></div>
      <div className="md:w-2/4 w-full flex flex-col justify-center items-center p-3 md:p-6">
        <div className="bg-white text-black p-6 rounded-lg w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <img
              // src={logo}
              alt="Cumulus Logo"
              className="h-10 w-90 "
            />
          </div>
          <p className="text-gray-600 mb-6">Please enter your password to login.</p>
          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2 mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Inline error message */}
            <div className="text-right mb-3">
              <Link to="/Updatepassword" className="text-blue-500 text-sm">Forgot password?</Link>
            </div>
            {/* Login Button */}
            {isLoading ? (
              <button
                type="submit"
                className="cursor-not-allowed flex justify-center bg-blue-400 w-full py-2 rounded-md text-white"
                disabled
              >
                <Loader2 className="animate-spin h-6 w-6 font-bold" />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
