import { Routes, Route, Navigate } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Dashboard Layout
import DashboardLayout from "../layouts/DashboardLayout";

// Protected Pages
import Dashboard from "../pages/Dashboard";
import BusinessProfile from "../pages/BusinessProfile";
import CaptionGenerator from "../pages/CaptionGenerator";
import HashtagGenerator from "../pages/HashtagGenerator";
import WhatsAppCampaign from "../pages/WhatsAppCampaign";
import CampaignHistory from "../pages/CampaignHistory";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

// Auth Context
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* ========================= */}
      {/* PUBLIC ROUTES */}
      {/* ========================= */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ========================= */}
      {/* PROTECTED ROUTES */}
      {/* ========================= */}

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/business-profile"
          element={<BusinessProfile />}
        />

        <Route
          path="/captions"
          element={<CaptionGenerator />}
        />

        <Route
          path="/hashtags"
          element={<HashtagGenerator />}
        />

        <Route
          path="/whatsapp"
          element={<WhatsAppCampaign />}
        />

        <Route
          path="/history"
          element={<CampaignHistory />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />
      </Route>

      {/* ========================= */}
      {/* FALLBACK */}
      {/* ========================= */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}