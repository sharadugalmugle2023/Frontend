// import React from 'react';
// import './Dashboard.css';

// function Dashboard() {
//   return (
//     <div className="dashboard">
        
//       <h2>Dashboard</h2>

//       <div className="dashboard-cards">
//         <div className="dashboard-card">
//           <h3>Validation</h3>
//           <p>142</p>
//         </div>
//         <div className="dashboard-card">
//           <h3>Verified Rules</h3>
//           <p>473</p>
//         </div>
//         <div className="dashboard-card">
//           <h3>Active Users</h3>
//           <p>23</p>
//         </div>
//       </div>

//       <div className="dashboard-charts">
//         <div className="chart-container">
//           <h3>Programs Used</h3>
//           {/* Add your chart here */}
//         </div>
//         <div className="chart-container">
//           <h3>Programs Used (Pie Chart)</h3>
//           {/* Add your chart here */}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Dashboard;















// import React from 'react';
// import './Dashboard.css';

// function Dashboard() {
//   return (
//     <div className="dashboard">
//       <h2>Dashboard</h2>
//       <div className="dashboard-metrics">
//         <div className="metric">
//           <h3>Validation</h3>
//           <p>142</p>
//         </div>
//         <div className="metric">
//           <h3>Verified Rules</h3>
//           <p>473</p>
//         </div>
//         <div className="metric">
//           <h3>Active Users</h3>
//           <p>23</p>
//         </div>
//       </div>
//       <div className="dashboard-charts">
//         <div className="chart-container">
//           <h3>Programs Used</h3>
//           {/* Add your chart here */}
//         </div>
//         <div className="chart-container">
//           <h3>Programs Used (Pie Chart)</h3>
//           {/* Add your chart here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


















// import React from 'react';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   BarElement,
// } from 'chart.js';
// import { Pie, Bar } from 'react-chartjs-2';
// import './Dashboard.css';

// // Register the required components for Chart.js
// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// function Dashboard() {
//   // Data for the pie chart
//   const pieData = {
//     labels: ['IAP', 'NFO', 'Product'],
//     datasets: [
//       {
//         label: 'Programs Used',
//         data: [60, 20, 20],
//         backgroundColor: ['#36A2EB', '#FFCE56', '#AFDE56'],
//         hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#AFDE56'],
//       },
//     ],
//   };

//   // Options for the pie chart
//   const pieOptions = {
//     maintainAspectRatio: false,
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'right',
//       },
//     },
//   };

//   // Data for the bar chart
//   const barData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Product',
//         data: [12, 19, 3, 5, 2, 3, 9, 10, 15, 20, 22, 18],
//         backgroundColor: '#36A2EB',
//       },
//       {
//         label: 'IAP',
//         data: [10, 14, 8, 6, 11, 9, 4, 5, 8, 15, 18, 10],
//         backgroundColor: '#FFCE56',
//       },
//     ],
//   };

//   // Options for the bar chart
//   const barOptions = {
//     maintainAspectRatio: false,
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//     },
//     scales: {
//       x: {
//         beginAtZero: true,
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="dashboard">
//       <h2>Dashboard</h2>

//       <div className="dashboard-metrics">
//         <div className="metric">
//           <h3>Validated Documents</h3>
//           <p>142</p>
//         </div>
//         <div className="metric">
//           <h3>Total No. of Approved rules</h3>
//           <p>473</p>
//         </div>
//         <div className="metric">
//           <h3>Active Users</h3>
//           <p>23</p>
//         </div>
//       </div>

//       <div className="dashboard-charts">
//         <div className="chart-container">
//           <h3>Programs Used</h3>
//           <div className="bar-chart-wrapper">
//             <Bar data={barData} options={barOptions} />
//           </div>
//         </div>
//         <div className="chart-container">
//           <h3>Programs Used (Pie Chart)</h3>
//           <div className="pie-chart-wrapper">
//             <Pie data={pieData} options={pieOptions} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;





















import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import './Dashboard.css';

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function Dashboard() {
  const [approvedRulesCount, setApprovedRulesCount] = useState(0);

  useEffect(() => {
    fetchApprovedRulesCount();
  }, []);

  const fetchApprovedRulesCount = async () => {
    try {
      const response = await fetch(`/list_rules?status=approved`);
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        setApprovedRulesCount(data.data.length);
      } else {
        console.error('Failed to fetch approved rules count:', data.data);
      }
    } catch (error) {
      console.error('Error fetching approved rules count:', error);
    }
  };

  // Data for the pie chart
  const pieData = {
    labels: ['IAP', 'NFO', 'Product'],
    datasets: [
      {
        label: 'Programs Used',
        data: [60, 20, 20],
        backgroundColor: ['#36A2EB', '#FFCE56', '#AFDE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#AFDE56'],
      },
    ],
  };

  // Options for the pie chart
  const pieOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  // Data for the bar chart
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Product',
        data: [12, 19, 3, 5, 2, 3, 9, 10, 15, 20, 22, 18],
        backgroundColor: '#36A2EB',
      },
      {
        label: 'IAP',
        data: [10, 14, 8, 6, 11, 9, 4, 5, 8, 15, 18, 10],
        backgroundColor: '#FFCE56',
      },
    ],
  };

  // Options for the bar chart
  const barOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="dashboard-metrics">
        <div className="metric">
          <h3>Validated Documents</h3>
          <p>142</p>
        </div>
        <div className="metric">
          <h3>Total No. of Approved rules</h3>
          <p>{approvedRulesCount}</p>
        </div>
        <div className="metric">
          <h3>Active Users</h3>
          <p>23</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Programs Used</h3>
          <div className="bar-chart-wrapper">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
        <div className="chart-container">
          <h3>Programs Used (Pie Chart)</h3>
          <div className="pie-chart-wrapper">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
