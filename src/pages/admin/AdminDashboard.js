import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated and is an admin
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userRole = localStorage.getItem('userRole');
    
    if (!isAuthenticated || userRole !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white to-green-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-green-800">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Employees</h3>
          <p className="text-3xl font-bold text-green-600">150</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Active Requests</h3>
          <p className="text-3xl font-bold text-green-600">25</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Pending Approvals</h3>
          <p className="text-3xl font-bold text-green-600">10</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Completed Tasks</h3>
          <p className="text-3xl font-bold text-green-600">45</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-600">Created new request</p>
              </div>
              <div className="text-sm text-gray-500">10:30 AM - 2024-04-20</div>
            </div>
          </div>
          <div className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Jane Smith</p>
                <p className="text-sm text-gray-600">Updated profile</p>
              </div>
              <div className="text-sm text-gray-500">11:15 AM - 2024-04-20</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200">
              Add New Employee
            </button>
            <button className="w-full text-left px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200">
              Manage Departments
            </button>
            <button className="w-full text-left px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200">
              View Reports
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Server Status</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md">Online</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Database Status</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md">Connected</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Last Backup</span>
              <span className="text-gray-600">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;