import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Bar } from "react-chartjs-2";
import {
  RiArrowUpSFill,
  RiUser3Fill,
  RiWallet3Fill,
  RiHistoryFill,
  RiMoneyDollarCircleFill,
  RiTeamFill
} from "react-icons/ri";
import "../scss/Dashboard/Report.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Report = () => {
  const [timeRange, setTimeRange] = useState("7 Days");

  const chartData = {
    "7 Days": {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [5.6, 6.4, 7.6, 7.8, 7.0, 3.7, 3.7]
    },
    "1 Month": {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [20, 25, 18, 22]
    },
    "1 Year": {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [50, 65, 70, 80, 90, 85, 88, 75, 60, 70, 80, 95]
    }
  };

  const data = {
    labels: chartData[timeRange].labels,
    datasets: [
      {
        label: "Sessions",
        data: chartData[timeRange].data,
        backgroundColor: "#3CB9DB"
      }
    ]
  };
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Menonaktifkan aspek rasio bawaan
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };


  return (
    <DashboardLayout>
      <div className="report-container">
      <div className="report-wallet">
    <div className="report-statistics">
        <div className="report-header">
            <div className="report-title">
                <div className="summary-icon statistic">
                    <RiWallet3Fill className="report-icon" />
                </div>
                <p className="summary-title">Statistic</p>
            </div>
            <div className="filter-buttons">
                {["7 Days", "1 Month", "1 Year"].map((range) => (
                    <button
                        key={range}
                        className={timeRange === range ? "active" : ""}
                        onClick={() => setTimeRange(range)}
                    >
                        {range}
                    </button>
                ))}
            </div>
        </div>
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    </div>

    <div className="report-summary">
        <div className="summary-card-card">
            <div className="summary-detail">
                <div className="header-summary">
                    <div className="summary-icon earnings">
                        <RiMoneyDollarCircleFill />
                    </div>
                    <p className="summary-title">Your Earnings</p>
                </div>
                <div className="summary-details">
                    <div className="summary-icp-price">
                        <img src="/images/ICP Logo.png" alt="ICP Logo" />
                        <h2 className="summary-value">41.8 ICP</h2>
                    </div>
                    <p className="summary-currency">Rp 5.949.266,40</p>
                </div>
            </div>
            <div className="summary-growth">
                <RiArrowUpSFill className="growth-icon" />
                <span className="growth-percentage">25.64%</span>
                <span className="growth-label">Last Week</span>
            </div>
        </div>

        <div className="summary-card-card">
            <div className="summary-detail">
                <div className="header-summary">
                    <div className="summary-icon customers">
                        <RiTeamFill />
                    </div>
                    <p className="summary-title">Total Customers</p>
                </div>
                <div className="summary-details gap-detail">
                    <h2 className="summary-value">80</h2>
                    <p className="summary-label">Customer</p>
                </div>
            </div>
            <div className="summary-growth">
                <RiArrowUpSFill className="growth-icon" />
                <span className="growth-percentage">25.64%</span>
                <span className="growth-label">Last Week</span>
            </div>
        </div>
    </div>
</div>



        {/* History Table */}
        <div className="report-history">
          <div className="header-history">
            <RiHistoryFill className="history-icon history" /> 
            <p className="history-title">History</p>
          </div>
          <div className="history-table">
            <table>
              <thead className="header-history-table">
                <tr>
                  <th>Name</th>
                  <th>Time Ordered</th>
                  <th>Time Scheduled</th>
                  <th>Status</th>
                  <th>Income</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Tomi Chizimu",
                  "Trung Thái Thương",
                  "Lukas Martin",
                  "Jesús Martínez",
                  "Yousef Alaoui"
                ].map((name, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`/images/profile${index + 1}.png`}
                        alt="User"
                        className="table-avatar"
                      />{" "}
                      {name}
                    </td>
                    <td>27 Jan 2025 | 14:29</td>
                    <td>27 Jan 2025 | 15:30</td>
                    <td>
                      <span className="status done">Done</span>
                    </td>
                    <td>
                      0.7137662963551952 ICP <br />{" "}
                      <span className="price-idr">Rp 100.000</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Report;
