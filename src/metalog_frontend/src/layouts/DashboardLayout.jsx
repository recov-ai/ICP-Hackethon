import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import '../scss/Dashboard/DashboardLayout.scss';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
