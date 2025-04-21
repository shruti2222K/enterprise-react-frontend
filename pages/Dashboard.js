import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/apiService';
import BarChart from './charts/BarChart';
import './styles/dashboard.css';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    getData();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="title">Welcome to the Dashboard</h1>
      <p className="subtitle">Visualize your data in a modern way</p>
      <div className="chart-container">
        <BarChart data={data} />
      </div>
      <footer>© 2025 Expense Management System</footer>
    </div>
  );
}

export default Dashboard;