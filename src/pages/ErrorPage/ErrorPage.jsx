import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-6xl font-extrabold text-[#FF444A] mb-4">Oops!</div>
      <div className="text-4xl font-semibold text-gray-800 mb-4">404 - Page Not Found</div>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for might have been removed or doesn't exist.</p>
      <Link to="/" className="bg-[#FF444A]  text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;