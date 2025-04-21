import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState({
    pending: [
      { id: 1, employee: 'John Doe', type: 'Leave', date: '2024-04-20', status: 'Pending' },
      { id: 2, employee: 'Jane Smith', type: 'Expense', date: '2024-04-19', status: 'Pending' },
    ],
    approved: [
      { id: 3, employee: 'Mike Johnson', type: 'Leave', date: '2024-04-18', status: 'Approved' },
    ],
    rejected: [
      { id: 4, employee: 'Sarah Wilson', type: 'Expense', date: '2024-04-17', status: 'Rejected' },
    ],
  });

  useEffect(() => {
    // Check if user is authenticated and is a manager
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userRole = localStorage.getItem('userRole');
    
    if (!isAuthenticated || userRole !== 'manager') {
      navigate('/login');
    }
  }, [navigate]);

  const handleApprove = (id) => {
    setRequests(prev => {
      const request = prev.pending.find(r => r.id === id);
      return {
        ...prev,
        pending: prev.pending.filter(r => r.id !== id),
        approved: [...prev.approved, { ...request, status: 'Approved' }],
      };
    });
  };

  const handleReject = (id) => {
    setRequests(prev => {
      const request = prev.pending.find(r => r.id === id);
      return {
        ...prev,
        pending: prev.pending.filter(r => r.id !== id),
        rejected: [...prev.rejected, { ...request, status: 'Rejected' }],
      };
    });
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white to-green-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-green-800">Manager Dashboard</h1>
      </div>
      
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-green-900/20 p-1">
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5
              ${selected ? 'bg-white text-green-700 shadow' : 'text-green-100 hover:bg-white/[0.12] hover:text-white'}`
            }
          >
            Pending Requests
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5
              ${selected ? 'bg-white text-green-700 shadow' : 'text-green-100 hover:bg-white/[0.12] hover:text-white'}`
            }
          >
            Approved Requests
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5
              ${selected ? 'bg-white text-green-700 shadow' : 'text-green-100 hover:bg-white/[0.12] hover:text-white'}`
            }
          >
            Rejected Requests
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Pending Requests</h2>
              <div className="space-y-4">
                {requests.pending.map((request) => (
                  <div key={request.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{request.employee}</p>
                        <p className="text-sm text-gray-600">{request.type} - {request.date}</p>
                      </div>
                      <div className="space-x-2">
                        <button
                          onClick={() => handleApprove(request.id)}
                          className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(request.id)}
                          className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Approved Requests</h2>
              <div className="space-y-4">
                {requests.approved.map((request) => (
                  <div key={request.id} className="border rounded-lg p-4">
                    <div>
                      <p className="font-medium">{request.employee}</p>
                      <p className="text-sm text-gray-600">{request.type} - {request.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Rejected Requests</h2>
              <div className="space-y-4">
                {requests.rejected.map((request) => (
                  <div key={request.id} className="border rounded-lg p-4">
                    <div>
                      <p className="font-medium">{request.employee}</p>
                      <p className="text-sm text-gray-600">{request.type} - {request.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ManagerDashboard; 