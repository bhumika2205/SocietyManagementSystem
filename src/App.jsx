import { Routes, Route, Navigate } from "react-router-dom";

import VendorLayout   from "./layouts/VendorLayout";
import Dashboard      from "./pages/Vendor/Dashboard";
import AssignedJobs   from "./pages/Vendor/AssignedJobs";
import CompletedJobs  from "./pages/Vendor/CompletedJobs";
import Payments       from "./pages/Vendor/Payments";
import Invoices       from "./pages/Vendor/Invoices";
import Documents      from "./pages/Vendor/Documents";
import Messages       from "./pages/Vendor/Messages";
import Profile        from "./pages/Vendor/Profile";
import Settings       from "./pages/Vendor/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route element={<VendorLayout />}>
        <Route path="/dashboard"     element={<Dashboard />} />
        <Route path="/assigned-jobs" element={<AssignedJobs />} />
        <Route path="/completed-jobs" element={<CompletedJobs />} />
        <Route path="/payments"      element={<Payments />} />
        <Route path="/invoices"      element={<Invoices />} />
        <Route path="/documents"     element={<Documents />} />
        <Route path="/messages"      element={<Messages />} />
        <Route path="/profile"       element={<Profile />} />
        <Route path="/settings"      element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
