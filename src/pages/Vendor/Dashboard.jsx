import Welcome from "../../components/Vendors/Welcome";
import StatsSection from "../../components/Vendors/StatsSection";
import DashboardContent from "../../components/Vendors/DashboardContent";
import ActivitySection from "../../components/Vendors/ActivitySection";
import QuickActions from "../../components/Vendors/QuickActions";

function Dashboard() {
  return (
    <>
      <Welcome />

      <StatsSection />

      <DashboardContent />

      <ActivitySection />


      <QuickActions />
    </>
  );
}

export default Dashboard;