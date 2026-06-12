import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getAnalytics, getCampaigns } from "../api/campaignApi";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Hash,
  MessageCircle,
  Image,
  ArrowRight,
  BarChart3,
  Building2,
  Activity,
} from "lucide-react";

function Dashboard() {
  const [analytics, setAnalytics] = useState({});
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const analyticsRes = await getAnalytics();
      const campaignsRes = await getCampaigns();

      setAnalytics(analyticsRes.data);
      setRecent(campaignsRes.data.campaigns.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide">
            Workspace Overview
          </p>
          <h1 className="page-title mt-2">Marketing Dashboard</h1>
          <p className="page-subtitle mt-3 max-w-2xl">
            Generate campaign content, manage brand identity, and track marketing activity from one clean workspace.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/business" className="btn-secondary inline-flex items-center gap-2">
            <Building2 size={18} />
            Brand Profile
          </Link>

          <Link to="/caption-generator" className="btn-primary inline-flex items-center gap-2">
            Generate Campaign <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
        <Stat title="Total Campaigns" value={analytics.totalCampaigns || 0} trend="All generated content" />
        <Stat title="Captions Generated" value={analytics.totalCaptions || 0} trend="Social ad copy" />
        <Stat title="Hashtag Sets" value={analytics.totalHashtags || 0} trend="Discovery assets" />
        <Stat title="WhatsApp Campaigns" value={analytics.totalWhatsApp || 0} trend="Message campaigns" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        <ToolCard
          icon={<Sparkles size={18} />}
          title="Caption Generator"
          text="Create concise campaign captions for social platforms."
          link="/caption-generator"
        />
        <ToolCard
          icon={<Hash size={18} />}
          title="Hashtag Generator"
          text="Generate organized hashtag sets for better discovery."
          link="/hashtag-generator"
        />
        <ToolCard
          icon={<MessageCircle size={18} />}
          title="WhatsApp Campaigns"
          text="Prepare customer-ready promotional messages."
          link="/whatsapp-generator"
        />
        <ToolCard
          icon={<Image size={18} />}
          title="Poster Prompts"
          text="Create structured prompts for marketing creatives."
          link="/poster-generator"
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr] gap-6 mt-6">
        <div className="card">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="section-title">Recent Campaigns</h2>
              <p className="page-subtitle mt-1">
                Latest generated assets across your workspace.
              </p>
            </div>

            <Link
              to="/campaign-history"
              className="text-sm text-[#2563eb] font-semibold inline-flex items-center gap-2 hover:text-[#1d4ed8]"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-5 divide-y divide-[#e5e7eb]">
            {recent.length === 0 && (
              <div className="border border-dashed border-[#d1d5db] rounded-lg p-10 text-center">
                <BarChart3 className="mx-auto text-[#9ca3af]" size={28} />
                <p className="font-semibold mt-3">No campaigns yet</p>
                <p className="page-subtitle mt-1">
                  Generate your first campaign to start tracking activity.
                </p>
              </div>
            )}

            {recent.map((item) => (
              <div key={item._id} className="py-4 hover:bg-[#f9fafb] px-2 -mx-2 rounded-md">
                <div className="flex justify-between gap-4">
                  <p className="capitalize font-semibold text-sm text-[#111827]">
                    {item.type}
                  </p>
                  <p className="text-xs text-[#6b7280]">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <p className="text-sm text-[#4b5563] mt-2 line-clamp-2 leading-6">
                  {item.output}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Panel
            icon={<Activity size={18} />}
            title="Workspace Status"
            text="Your production deployment is active with authentication, campaigns, exports, and reporting enabled."
          />

          <Panel
            icon={<Building2 size={18} />}
            title="Recommended Next Step"
            text="Complete your business profile and upload a brand logo to improve output consistency."
          />
        </div>
      </section>
    </DashboardLayout>
  );
}

function Stat({ title, value, trend }) {
  return (
    <div className="card">
      <p className="text-xs text-[#6b7280] font-medium">{title}</p>
      <h2 className="text-[28px] font-bold tracking-[-0.02em] mt-2">{value}</h2>
      <p className="text-xs text-[#6b7280] mt-2">{trend}</p>
    </div>
  );
}

function ToolCard({ icon, title, text, link }) {
  return (
    <Link to={link} className="card hover:border-[#2563eb] block">
      <div className="w-9 h-9 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
        {icon}
      </div>

      <h3 className="text-[18px] font-semibold mt-4">{title}</h3>
      <p className="text-sm text-[#6b7280] mt-2 leading-6">{text}</p>

      <p className="mt-4 text-[#2563eb] text-sm font-semibold flex items-center gap-2">
        Open Tool <ArrowRight size={16} />
      </p>
    </Link>
  );
}

function Panel({ icon, title, text }) {
  return (
    <div className="card">
      <div className="flex items-center gap-2 text-[#2563eb]">
        {icon}
        <h3 className="section-title">{title}</h3>
      </div>
      <p className="page-subtitle mt-3">{text}</p>
    </div>
  );
}

export default Dashboard;