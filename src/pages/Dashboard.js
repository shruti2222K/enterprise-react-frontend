import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white to-green-100">
      <h1 className="text-3xl font-extrabold mb-6 text-green-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-green-700">Overview</h2>
          <p className="text-gray-600">Welcome to your dashboard</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-green-700">Statistics</h2>
          <p className="text-gray-600">Key metrics and analytics</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-green-700">Recent Activity</h2>
          <p className="text-gray-600">Latest updates and notifications</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 