import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [newRequest, setNewRequest] = useState({
    type: 'Leave',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const [requests, setRequests] = useState({
    pending: [
      { id: 1, type: 'Leave', startDate: '2024-04-25', endDate: '2024-04-27', status: 'Pending' },
    ],
    approved: [
      { id: 2, type: 'Expense', amount: 500, date: '2024-04-15', status: 'Approved' },
    ],
    rejected: [
      { id: 3, type: 'Leave', startDate: '2024-04-10', endDate: '2024-04-12', status: 'Rejected' },
    ],
  });

  useEffect(() => {
    // Check if user is authenticated and is an employee
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userRole = localStorage.getItem('userRole');
    
    if (!isAuthenticated || userRole !== 'employee') {
      navigate('/login');
    }
  }, [navigate]);

  const handleCreateRequest = (e) => {
    e.preventDefault();
    const newId = Math.max(...requests.pending.map(r => r.id), 0) + 1;
    setRequests(prev => ({
      ...prev,
      pending: [...prev.pending, { ...newRequest, id: newId, status: 'Pending' }],
    }));
    setNewRequest({ type: 'Leave', startDate: '', endDate: '', reason: '' });
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white to-green-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-green-800">Employee Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
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
                        <div>
                          <p className="font-medium">{request.type} Request</p>
                          <p className="text-sm text-gray-600">
                            {request.startDate} - {request.endDate}
                          </p>
                          <p className="text-sm text-gray-600">Status: {request.status}</p>
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
                          <p className="font-medium">{request.type} Request</p>
                          <p className="text-sm text-gray-600">
                            {request.startDate} - {request.endDate}
                          </p>
                          <p className="text-sm text-gray-600">Status: {request.status}</p>
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
                          <p className="font-medium">{request.type} Request</p>
                          <p className="text-sm text-gray-600">
                            {request.startDate} - {request.endDate}
                          </p>
                          <p className="text-sm text-gray-600">Status: {request.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Create New Request</h2>
          <form onSubmit={handleCreateRequest} className="space-y-4">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Request Type
              </label>
              <select
                id="type"
                value={newRequest.type}
                onChange={(e) => setNewRequest({ ...newRequest, type: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="Leave">Leave</option>
                <option value="Expense">Expense</option>
                <option value="Training">Training</option>
              </select>
            </div>
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={newRequest.startDate}
                onChange={(e) => setNewRequest({ ...newRequest, startDate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={newRequest.endDate}
                onChange={(e) => setNewRequest({ ...newRequest, endDate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                Reason
              </label>
              <textarea
                id="reason"
                value={newRequest.reason}
                onChange={(e) => setNewRequest({ ...newRequest, reason: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                rows={3}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;