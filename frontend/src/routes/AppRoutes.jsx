import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import BusinessProfile from "../pages/BusinessProfile";
import CaptionGenerator from "../pages/CaptionGenerator";
import HashtagGenerator from "../pages/HashtagGenerator";
import WhatsAppGenerator from "../pages/WhatsAppGenerator";
import PosterGenerator from "../pages/PosterGenerator";
import CampaignHistory from "../pages/CampaignHistory";
import Workspace from "../pages/Workspace";
import Reports from "../pages/Reports";
import PricingPage from "../pages/PricingPage";
import Settings from "../pages/Settings";
import AdminDashboard from "../pages/AdminDashboard";
import Billing from "../pages/Billing";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/business"
          element={
            <ProtectedRoute>
              <BusinessProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/caption-generator"
          element={
            <ProtectedRoute>
              <CaptionGenerator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hashtag-generator"
          element={
            <ProtectedRoute>
              <HashtagGenerator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/whatsapp-generator"
          element={
            <ProtectedRoute>
              <WhatsAppGenerator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/poster-generator"
          element={
            <ProtectedRoute>
              <PosterGenerator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/campaign-history"
          element={
            <ProtectedRoute>
              <CampaignHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/workspace"
          element={
            <ProtectedRoute>
              <Workspace />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/pricing"
          element={
            <ProtectedRoute>
              <PricingPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/billing"
          element={
            <ProtectedRoute>
              <Billing />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;