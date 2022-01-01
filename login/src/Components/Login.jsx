import { useState } from "react";
import React from "react";
import {useStore} from "store/store";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {token, login, logOut} = useStore();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var token = `${username}-some-JWT-token-generated-and-returned-by-the-server`;
    setPassword("");
    setUsername("");
    // Call Login Server API to check if the user is valid
    
    login(token);
  };

  const handleLogOut = (event) => {
    event.preventDefault();
    logOut();
    };



  return (
 
    <div className="min-h-screen text-gray-800 antialiased bg-gray-100 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12 ">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light">Login </span>
        <form className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-indigo-400 rounded-t-md"></div>
          <div className="px-8 py-6">
            <label className="block font-semibold">User Name</label>
            <input
              type="text"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-400 focus:ring-1 rounded-md"
              placeholder="Enter your user name"
              value={username}
              onChange={handleUsernameChange}
            />
            <label className="mt-3 block font-semibold">Password</label>
            <input
              type="password"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-400 focus:ring-1 rounded-md"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="flex justify-between items-baseline">
              <button
                type="submit"
                className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600"
                onClick={handleSubmit}
              >
                Login
              </button>
              <a href="#" className="text-sm hover:underline" onClick={handleLogOut}>
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
