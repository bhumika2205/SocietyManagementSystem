import Sidebar from "../../components/Vendors/Sidebar";
import Navbar from "../../components/Vendors/Navbar";
import "./VendorDashboard.css";
import Welcome from "../../components/Vendors/Welcome";
import StatsSection from "../../components/Vendors/StatsSection";
import DashboardContent from "../../components/Vendors/DashboardContent";
import ActivitySection from "../../components/Vendors/ActivitySection";
import JobsTable from "../../components/Vendors/JobsTable";
import QuickActions from "../../components/Vendors/QuickActions";

function VendorDashboard() {
  return (
    <div className="dashboard">

      {/* Fixed Sidebar */}
      <aside className="sidebar-wrapper">
        <Sidebar />
      </aside>

      {/* Right Side */}
      <main className="main">

        {/* Fixed Navbar */}
        <Navbar />

        {/* Scrollable Content */}
        <div className="main-content">

          <Welcome />

          <StatsSection />

          <DashboardContent />

          <ActivitySection />

          <JobsTable />

          <QuickActions />

        </div>

      </main>

    </div>
  );
}

export default VendorDashboard;