import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import BusinessProfile from "./pages/BusinessProfile";

import CaptionGenerator from "./pages/CaptionGenerator";
import HashtagGenerator from "./pages/HashtagGenerator";
import WhatsAppCampaign from "./pages/WhatsAppCampaign";
import Reports from "./pages/Reports";
import CampaignHistory from "./pages/CampaignHistory";
import Settings from "./pages/Settings";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard Routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/business-profile" element={<BusinessProfile />} />

          <Route path="/captions" element={<CaptionGenerator />} />
          <Route path="/hashtags" element={<HashtagGenerator />} />
          <Route path="/whatsapp" element={<WhatsAppCampaign />} />

          <Route path="/reports" element={<Reports />} />
          <Route path="/history" element={<CampaignHistory />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}