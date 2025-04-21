import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Enterprise Dashboard</div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-green-200">Dashboard</Link>
          <Link to="/reports" className="hover:text-green-200">Reports</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 