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
      <p className="text-sm font-bold text-[#6b7280] uppercase tracking-wider">
        Workspace
      </p>

      <h1 className="text-4xl font-black mt-2">Business Workspace</h1>

      <p className="text-[#6b7280] mt-3">
        Manage your brand identity, usage and recent campaign activity.
      </p>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 mt-8">
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