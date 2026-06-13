import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import BusinessProfile from "../pages/BusinessProfile";
import CaptionGenerator from "../pages/CaptionGenerator";
import HashtagGenerator from "../pages/HashtagGenerator";
import WhatsAppCampaign from "../pages/WhatsAppCampaign";
import CampaignHistory from "../pages/CampaignHistory";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

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
        <Route path="/history" element={<CampaignHistory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}