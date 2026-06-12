import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getBusiness } from "../api/businessApi";
import { getAnalytics, getCampaigns } from "../api/campaignApi";
import BrandProfileCard from "../components/BrandProfileCard";
import UsageMeter from "../components/UsageMeter";
import RecentActivity from "../components/RecentActivity";

function Workspace() {
  const [business, setBusiness] = useState(null);
  const [analytics, setAnalytics] = useState({});
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    loadWorkspace();
  }, []);

  const loadWorkspace = async () => {
    try {
      const businessRes = await getBusiness();
      const analyticsRes = await getAnalytics();
      const campaignsRes = await getCampaigns();

      setBusiness(businessRes.data.business);
      setAnalytics(analyticsRes.data);
      setCampaigns(campaignsRes.data.campaigns);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div>
        <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
          Workspace
        </p>
        <h1 className="page-title mt-2">Business Workspace</h1>
        <p className="page-subtitle mt-3">
          Manage brand status, usage, and recent campaign activity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 mt-6">
        <BrandProfileCard
          business={business}
          campaignsCount={analytics.totalCampaigns || 0}
        />

        <UsageMeter used={analytics.totalCampaigns || 0} limit={100} />
      </div>

      <div className="mt-6">
        <RecentActivity campaigns={campaigns} />
      </div>
    </DashboardLayout>
  );
}

export default Workspace;