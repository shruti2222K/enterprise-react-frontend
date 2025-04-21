import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ role }) {
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  return (
    <nav className="flex gap-6 bg-white px-6 py-4 shadow-lg mb-4 sticky top-0 z-50">
      <div className="relative">
        <button
          onClick={() => setIsDashboardOpen(!isDashboardOpen)}
          className="hover:text-blue-600 font-semibold flex items-center"
        >
          Dashboard
          <svg
            className={`w-4 h-4 ml-1 transition-transform ${isDashboardOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isDashboardOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <Link
              to={`/${role}/dashboard`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              View Dashboard
            </Link>
            <Link
              to={`/${role}/profile`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              My Profile
            </Link>
            <Link
              to={`/${role}/settings`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <Link className="hover:text-blue-600 font-semibold" to="/expenses">Expenses</Link>
      {(role === 'manager' || role === 'admin') && (
        <Link className="hover:text-blue-600 font-semibold" to="/approvals">Approvals</Link>
      )}
      {role === 'admin' && (
        <Link className="hover:text-blue-600 font-semibold" to="/reports">Reports</Link>
      )}
    </nav>
  );
}

export default Navbar; 