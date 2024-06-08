import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="from-purple-400 to-blue-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <Link to='/'>
                <Logo width="70px" />
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              &copy; Copyright 2024. All Rights Reserved by ODK.
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold uppercase text-gray-600 mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Features</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Affiliate Program</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Press Kit</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold uppercase text-gray-600 mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Account</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Help</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Contact Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Customer Support</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold uppercase text-gray-600 mb-4">Legals</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Terms & Conditions</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-700 hover:text-white transition duration-300">Licensing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
