import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaHome, FaUser, FaCog, FaUserCircle } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';


const MainTopNav = () => {
  return (
    <Router>
      <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-2">
        <div className="flex items-center flex-shrink-0 text-gray-700 mr-4">
          <img src={logo} alt="logo" className="h-6 w-6" />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow lg:flex-shrink-0 lg:flex lg:justify-end">
            <div className="flex">
              <Link
                to="/"
                className="block mt-2 lg:inline-block lg:mt-0 text-gray-700 hover:text-teal-500 mr-4"
              >
                <FaHome className="h-6 w-6" />
              </Link>
              <Link
                to="/content/Employees.js"
                className="block mt-2 lg:inline-block lg:mt-0 text-gray-700 hover:text-teal-500 mr-4"
              >
                <FaUser className="h-6 w-6" />
              </Link>
              <Link
                to="/content/Settings.js"
                className="block mt-2 lg:inline-block lg:mt-0 text-gray-700 hover:text-teal-500 mr-4"
              >
                <FaCog className="h-6 w-6" />
              </Link>
              <Link
                to="/content/About.js"
                className="block mt-2 lg:inline-block lg:mt-0 text-gray-700 hover:text-teal-500"
              >
                <FaUserCircle className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default MainTopNav;