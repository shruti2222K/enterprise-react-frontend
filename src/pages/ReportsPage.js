import React from 'react';
import Button from '../components/ui/button';

const ReportsPage = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white to-green-100">
      <h1 className="text-3xl font-extrabold mb-6 text-green-800">Reports</h1>
      <div className="bg-white rounded-xl p-4 shadow-md">
        <p className="text-gray-700 mb-4">Export reports in your desired format:</p>
        <Button className="mr-4">Export PDF</Button>
        <Button>Export Excel</Button>
      </div>
    </div>
  );
};

export default ReportsPage; 